// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Documentación del Proyecto TFG - Miguel Ángel Reyes Méndez",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TFG-BrewMap-Descubre-y-Comparte",
        },
      ],
      sidebar: [
        {
          label: "Documentación",
          items: [
            { label: "Introducción", slug: "introduccion" },
            { label: "Funcionalidades", slug: "funcionalidades" },
            { label: "Conclusión", slug: "conclusion" },
          ],
        },
        {
          label: "Diagramas",
          items: [
            {
              label: "Diagrama de Casos de Uso",
              slug: "diagramas/diagrama_de_caso_uso",
            },
            {
              label: "Diagrama de Clases UML",
              slug: "diagramas/clase_uml",
            },
            {
              label: "Diagrama Entidad-Relación",
              slug: "diagramas/modelo_entidad_relacion",
            },
            {
              label: "Diagrama de Componentes",
              slug: "diagramas/diagrama_componente",
            },
            {
              label: "Diagrama de Secuencia",
              slug: "diagramas/diagrama_secuencia",
            },
            {
              label: "Diagrama de Actividad",
              slug: "diagramas/diagrama_de_actividades",
            },
          ],
        },
      ],
    }),
  ],
});
