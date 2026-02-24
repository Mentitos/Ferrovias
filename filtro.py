import pdfplumber
import json
import os

def pdf_a_json_por_paginas():
    archivo_entrada = "HORARIO_20.pdf"
    archivo_salida = "horarios_por_paginas.json"
    
    if not os.path.exists(archivo_entrada):
        print(f"Error: No se encuentra el archivo {archivo_entrada}")
        return

    datos_pdf = {}

    with pdfplumber.open(archivo_entrada) as pdf:
        total_paginas = len(pdf.pages)
        print(f"Procesando {total_paginas} páginas...")

        for i, pagina in enumerate(pdf.pages):
            num_pagina = i + 1
            # Extraemos la tabla. 
            # table_settings ayuda a que detecte mejor las celdas en archivos de trenes
            tabla = pagina.extract_table(table_settings={
                "vertical_strategy": "lines",
                "horizontal_strategy": "lines",
                "snap_tolerance": 3,
            })

            if tabla:
                # Limpiamos los textos de cada celda (quitar saltos de línea raros)
                tabla_limpia = []
                for fila in tabla:
                    fila_limpia = [celda.replace('\n', ' ').strip() if celda else "" for celda in fila]
                    # Solo agregamos la fila si no está totalmente vacía
                    if any(fila_limpia):
                        tabla_limpia.append(fila_limpia)
                
                datos_pdf[f"pagina_{num_pagina}"] = tabla_limpia
                print(f"Página {num_pagina} extraída.")
            else:
                datos_pdf[f"pagina_{num_pagina}"] = "No se detectó tabla"
                print(f"Página {num_pagina}: No se encontraron tablas.")

    # Guardar el resultado
    with open(archivo_salida, 'w', encoding='utf-8') as f:
        json.dump(datos_pdf, f, ensure_ascii=False, indent=4)
    
    print(f"\nProceso finalizado. Se creó: {archivo_salida}")

if __name__ == "__main__":
    pdf_a_json_por_paginas()