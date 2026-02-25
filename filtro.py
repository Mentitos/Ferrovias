import pdfplumber
import json
import os

def corregir_sentido(texto):
    if not texto:
        return ""
    # Limpiamos saltos de línea y espacios
    texto = texto.replace('\n', ' ').strip()
    # Invertimos la cadena (ej: "ORITER" -> "RETIRO")
    return texto[::-1]

def pdf_a_json_ajustado():
    archivo_entrada = "HORARIO_20.pdf"
    archivo_salida = "horarios_por_paginas.json"
    
    datos_pdf = {}

    with pdfplumber.open(archivo_entrada) as pdf:
        for i, pagina in enumerate(pdf.pages):
            num_pagina = i + 1
            
            tabla = pagina.extract_table()

            if tabla:
                tabla_limpia = []
                for idx_fila, fila in enumerate(tabla):
                    
                    if idx_fila == 0:
                        
                        fila_procesada = [celda.replace('\n', ' ').strip() if celda else "" for celda in fila]
                    elif idx_fila == 1:
                        
                        fila_procesada = [corregir_sentido(celda) for celda in fila]
                    else:
                        
                        fila_procesada = [celda.replace('\n', ' ').strip() if celda else "" for celda in fila]
                    
                    if any(fila_procesada):
                        tabla_limpia.append(fila_procesada)
                
                datos_pdf[f"pagina_{num_pagina}"] = tabla_limpia
                print(f"Página {num_pagina} procesada correctamente.")

    with open(archivo_salida, 'w', encoding='utf-8') as f:
        json.dump(datos_pdf, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    pdf_a_json_ajustado()