const categories = [
    { id: 'detergentes', name: 'Detergentes', icon: '🧴' },
    { id: 'desinfectantes_alto_nivel', name: 'Desinfectantes Alto Nivel', icon: '🧪' },
    { id: 'desinfectantes_rutinarios', name: 'Desinfectantes Rutinarios', icon: '🧪' },
    { id: 'lavanderia', name: 'Lavanderia', icon: '🧹' },
    { id: 'higiene_de_manos', name: 'Higiene de Manos', icon: '🧴' },
];

const products = [
    {
        id: 1,
        name: 'Detergente oxigenado',
        category: 'detergentes',
        description: 'Detergente hospitalario oxigenado de alta eficacia, diseñado para limpieza profunda en pisos, superficies y textiles. Su acción activa remueve manchas orgánicas y suciedad persistente, dejando un ambiente limpio y fresco. Ideal para protocolos de limpieza concurrente en áreas críticas.',
        longDescription: 'Detergente hospitalario oxigenado de alta eficacia, diseñado para limpieza profunda en pisos, superficies y textiles. Su acción activa remueve manchas orgánicas y suciedad persistente, dejando un ambiente limpio y fresco. Ideal para protocolos de limpieza concurrente en áreas críticas.',
        features: [
            'Acción oxigenada desmanchaste',
            'Multiuso (superficies y textiles)',
            'Aroma agradable',
        ],
        images: [
            'img/Deteroxy1.webp',  
            'img/59628 DETEROXI GLBR.webp',   
            'img/58586 DETEROXI 20L.webp',  
        ],
        video: null,
        prices: { '1L': 2.30, 'galon': 8.93, 'caneca': 32.20 },
        codes: { '1L': '59627', 'galon': '59628', 'caneca': '58586' },
        badge: null
    },
    {
        id: 2,
        name: 'Desengrasante biodegradable',
        category: 'detergentes',
        description: 'Detergente desengrasante neutro formulado para la limpieza diaria de superficies y textiles. Remueve suciedad ligera y grasa sin dañar materiales ni alterar colores. Su fórmula balanceada permite uso frecuente en entornos hospitalarios bajo protocolos de limpieza concurrente.',
        longDescription: 'Detergente desengrasante neutro formulado para la limpieza diaria de superficies y textiles. Remueve suciedad ligera y grasa sin dañar materiales ni alterar colores. Su fórmula balanceada permite uso frecuente en entornos hospitalarios bajo protocolos de limpieza concurrente.',
        features: [
            'pH neutro seguro',
            'Remueve grasa ligera',
            'Apto para uso continuo',
        ],
        images: [
            'img/deter100bio.webp',   
            'img/47103 DETERBIO 20L.webp',   
            'img/47623 DETERBIO GBR.webp',   
        ],
        video: null,
        prices: { '1L': 2.30, 'galon': 7.99, 'caneca': 35.00 },
        codes: { '1L': '48906', 'galon': '47623', 'caneca': '47103' },
        badge: null
    },
    {
        id: 3,
        name: 'Tahor Wash',
        category: 'detergentes',
        description: 'Detergente concentrado de alta espuma, ideal para limpieza general y lavado de prendas hospitalarias. Su fórmula sin fragancia lo hace perfecto para áreas sensibles. Garantiza una limpieza eficaz sin dejar residuos aromáticos.',
        longDescription: 'Detergente concentrado de alta espuma, ideal para limpieza general y lavado de prendas hospitalarias. Su fórmula sin fragancia lo hace perfecto para áreas sensibles. Garantiza una limpieza eficaz sin dejar residuos aromáticos.',
        features: [
            'Alta espuma concentrada',
            'Sin aroma (uso hospitalario).',
            'Ideal para textiles y superficies.',
        ],
        images: [
            'img/tahorwhas1l.webp',  
            'img/tahorwashgl.webp',  
            'img/35922 TAHOR WASH 20L.webp',  
        ],
        video: null,
        prices: { '1L': 2.6, 'galon': 9.57, 'caneca': 36.46 },
        codes: { '1L': '50367', 'galon': '35920', 'caneca': '35922' },
        badge: null
    },
    {
        id: 4,
        name: 'Detergente clorado',
        category: 'detergentes',
        description: 'Detergente clorado de alto poder desengrasante y desinfectante. Especialmente formulado para limpieza profunda de pisos, baños y prendas blancas. Su contenido de cloro activo permite su uso en procesos de desinfección terminal en áreas de alto riesgo.',
        longDescription: 'Detergente clorado de alto poder desengrasante y desinfectante. Especialmente formulado para limpieza profunda de pisos, baños y prendas blancas. Su contenido de cloro activo permite su uso en procesos de desinfección terminal en áreas de alto riesgo.',
        features: [
            'Acción desengrasante + desinfectante',
            'Contiene cloro activo',
            'Uso en desinfección terminal',
        ],
        images: [
            'img/deter100cl1.webp',
            'img/35823 DET CLORADO GBR.webp',
            'img/35824 DET CLORADO 20L.webp',  
              
        ],
        video: null,
        prices: { '1L': 2.18, 'galon': 5.70, 'caneca': 24.00 },
        codes: { '1L': '42286', 'galon': '37863', 'caneca': '35824' },
        badge: null
    },
    {
        id: 5,
        name: 'Acido Sanitizante',
        category: 'detergentes',
        description: 'Limpiador ácido sanitizante formulado para eliminar sarro, óxido y residuos minerales en superficies. Combina ácido fosfórico con amonios cuaternarios, logrando limpieza profunda y desinfección efectiva. Ideal para uso concurrente y terminal en áreas hospitalarias.',
        longDescription: 'Limpiador ácido sanitizante formulado para eliminar sarro, óxido y residuos minerales en superficies. Combina ácido fosfórico con amonios cuaternarios, logrando limpieza profunda y desinfección efectiva. Ideal para uso concurrente y terminal en áreas hospitalarias.',
        features: [
            'Elimina sarro y óxido',
            'Acción dual: limpia y desinfecta',
            'Fórmula ácido + amonios',
        ],
        images: [
            'img/acidosanitizante1l.webp', 
            'img/35857 ACIDO ZANITIZANTE GLB.webp', 
            'img/35658 AC SANITIZANTE 20L.webp',  
        ],
        video: null,
        prices: { '1L': 3.10, 'galon': 11.40, 'caneca': 49.70 },
        codes: { '1L': '35656', 'galon': '35657', 'caneca': '35658' },
        badge: null
    },
    {
        id: 6,
        name: 'Seguriclean Baños',
        category: 'detergentes',
        description: 'Limpiador desinfectante ácido diseñado para baños hospitalarios. Su fórmula combina ácido fosfórico, peróxido de hidrógeno y amonios cuaternarios, garantizando limpieza profunda, eliminación de incrustaciones y desinfección efectiva, dejando un ambiente higiénico y con aroma agradable.',
        longDescription: 'Limpiador desinfectante ácido diseñado para baños hospitalarios. Su fórmula combina ácido fosfórico, peróxido de hidrógeno y amonios cuaternarios, garantizando limpieza profunda, eliminación de incrustaciones y desinfección efectiva, dejando un ambiente higiénico y con aroma agradable.',
        features: [
            'Triple acción desinfectante',
            'Elimina sarro e incrustaciones',
            'Aroma agradable',
        ],
        images: [
            'img/seguriclean1l.webp',         
            'img/59212 SEGURICELAN BAÑO.webp',         
            'img/59267 SEGURICLEAN BAÑO 20L (3).webp', 
        ],
        video: null,
        prices: { '1L': 2.60, 'galon': 8.26, 'caneca': 37.40 },
        codes: { '1L': '61046', 'galon': '59212', 'caneca': '59267' },
        badge: null
    },
    {
        id: 7,
        name: 'Oxi Quats',
        category: 'desinfectantes_alto_nivel',
        description: 'Desinfectante hospitalario de alto nivel formulado con peróxido de hidrógeno y amonios cuaternarios. Ofrece máxima eficacia en superficies críticas, eliminando microorganismos de alto riesgo. Ideal para procesos de desinfección terminal en áreas médicas exigentes.',
        longDescription: 'Desinfectante hospitalario de alto nivel formulado con peróxido de hidrógeno y amonios cuaternarios. Ofrece máxima eficacia en superficies críticas, eliminando microorganismos de alto riesgo. Ideal para procesos de desinfección terminal en áreas médicas exigentes.',
        features: [
            'Peróxido + amonios cuaternarios',
            'Alta eficacia antimicrobiana',
            'Uso en áreas críticas',
        ],
        images: [
            'img/Oxi1l.webp',   // galon
            'img/48085 OXI QUATS GBC.webp',   // galon
            'img/46730 OXIQUATS 20L.webp',    // caneca 20L
        ],
        video: null,
        prices: { '1L': 3.50, 'galon': 11.00, 'caneca': 45.00 },
        codes: { '1L': '47925', 'galon': '48085', 'caneca': '46730' },
        badge: null
    },
    {
        id: 8,
        name: 'Sanitizer TC',
        category: 'desinfectantes_alto_nivel',
        description: 'Desinfectante oxidante de alto nivel técnico a base de ácido peracético. Diseñado para eliminar bacterias, virus y esporas en ambientes hospitalarios. Su uso es controlado y recomendado para desinfección terminal en superficies de alto riesgo sanitario.',
        longDescription: 'Desinfectante oxidante de alto nivel técnico a base de ácido peracético. Diseñado para eliminar bacterias, virus y esporas en ambientes hospitalarios. Su uso es controlado y recomendado para desinfección terminal en superficies de alto riesgo sanitario.',
        features: [
            'Contiene ácido peracético',
            'Acción oxidante potente',
            'Elimina microorganismos resistentes',
        ],
        images: [
            'img/sanitizer tc.webp',   // galon
            'img/35657 SANITIZER TC.webp',
            'img/35658 SANITIZER 20L.webp',   
        ],
        video: null,
        prices: { '1L': 3.26, 'galon': 10.00, 'caneca': 39.99 },
        codes: { '1L': '35954', 'galon': '35955', 'caneca': '35956' },
        badge: null
    },
    {
        id: 9,
        name: 'Sanibat',
        category: 'desinfectantes_alto_nivel',
        description: 'Desinfectante hospitalario a base de amonios cuaternarios de alta concentración. Proporciona amplio espectro antimicrobiano para uso en múltiples superficies. Ideal para protocolos de desinfección concurrente y terminal en ambientes hospitalarios.',
        longDescription: 'Desinfectante hospitalario a base de amonios cuaternarios de alta concentración. Proporciona amplio espectro antimicrobiano para uso en múltiples superficies. Ideal para protocolos de desinfección concurrente y terminal en ambientes hospitalarios.',
        features: [
            'Alta concentración de amonios',
            'Amplio espectro bactericida',
            'Uso continuo y terminal',
        ],
        images: [
            'img/sanibat1l.webp',   // galon
            'img/35969 SANIBAT GLBR.webp',
            'img/36971 SANIBAT 20L.webp',    
        ],
        video: null,
        prices: { '1L': 2.50, 'galon': 9.00, 'caneca': 37.00 },
        codes: { '1L': '35968', 'galon': '45623', 'caneca': '35971' },
        badge: null
    },
    {
        id: 10,
        name: 'Dioxigen HD',
        category: 'desinfectantes_rutinarios',
        description: 'Desinfectante de alta eficacia formulado con peróxido de hidrógeno estabilizado. Ideal para reducir carga microbiana en superficies de alto tránsito, eliminando olores y garantizando ambientes seguros bajo protocolos de limpieza diaria hospitalaria.',
        longDescription: 'Desinfectante de alta eficacia formulado con peróxido de hidrógeno estabilizado. Ideal para reducir carga microbiana en superficies de alto tránsito, eliminando olores y garantizando ambientes seguros bajo protocolos de limpieza diaria hospitalaria.',
        features: [
            'Alta desinfección',
            'Control de olores',
            'Uso intensivo diario',
        ],
        images: [
            'img/dioxigen hd1l.webp',   // galon
            'img/41663 DIOXIGENT HD.webp',
            'img/46464 DIOXIGENT HD 20L.webp',  
       // presentacion
        ],
        video: null,
        prices: { '1L': 3.50, 'galon': 10.00, 'caneca': 43.00 },
        codes: { '1L': '45363', 'galon': '41663', 'caneca': '46464' },
        badge: null
    },
    {
        id: 11,
        name: 'Dioxigen Multiusos',
        category: 'desinfectantes_rutinarios',
        description: 'Desinfectante multiuso que limpia y desinfecta simultáneamente. Su fórmula permite uso en diversas superficies hospitalarias, facilitando procesos de limpieza rutinaria con alta eficiencia y seguridad operativa.',
        longDescription: 'Desinfectante multiuso que limpia y desinfecta simultáneamente. Su fórmula permite uso en diversas superficies hospitalarias, facilitando procesos de limpieza rutinaria con alta eficiencia y seguridad operativa.',
        features: [
            'Limpia y desinfecta',
            'Uso versátil',
            'Aplicación diaria',
        ],
        images: [
            "img/dioxigenpro1.webp",
            'img/56567 DIOXIGENT MULTIUSOS.webp',
            "img/dioxigenpro.webp" // presentacion
        ],
        video: null,
        prices: { '1L': 2.50, 'galon': 9.00, 'caneca': 33.00 },
        codes: { '1L': '56568', 'galon': '56567', 'caneca': '59106' },
        badge: null
    },

    {
        id: 13,
        name: 'Sanibat D',
        category: 'desinfectantes_rutinarios',
        description: 'Versión reforzada de desinfectante con amonios cuaternarios, diseñada para mayor persistencia en superficies. Proporciona protección prolongada contra microorganismos en áreas hospitalarias críticas.',
        longDescription: 'Versión reforzada de desinfectante con amonios cuaternarios, diseñada para mayor persistencia en superficies. Proporciona protección prolongada contra microorganismos en áreas hospitalarias críticas.',
        features: [
            'Mayor poder desinfectante',
            'Acción prolongada',
            'Uso en zonas críticas',
        ],
        images: [
            'img/sanibat1l.webp',
            'img/35969 SANIBAT GLBR.webp',
            'img/36971 SANIBAT 20L.webp',   
            
        ],
        video: null,
        prices: { '1L': 2.39, 'galon': 4.46, 'caneca': 15.17 },
        codes: { '1L': '44123', 'galon': '53686', 'caneca': '45730' },
        badge: null
    },

    // ── LAVANDERIA ──────────────────────────────────────────────────────────
    {
        id: 14,
        name: 'Detergente Liquido Hipoalergenico',
        category: 'lavanderia',
        description: 'Detergente textil de pH neutro, formulado para lavado seguro de prendas hospitalarias. Su bajo nivel de fragancia y composición suave lo hacen ideal para contacto frecuente con pacientes, garantizando limpieza sin irritación ni residuos agresivos.',
        longDescription: 'Detergente textil de pH neutro, formulado para lavado seguro de prendas hospitalarias. Su bajo nivel de fragancia y composición suave lo hacen ideal para contacto frecuente con pacientes, garantizando limpieza sin irritación ni residuos agresivos.',
        features: [
            'pH neutro (no agresivo) ',
            'Bajo aroma (no invasivo)',
            'Apto para lavado frecuente de textiles clínicos ',
        ],
        images: [
            'img/DETER HIPOALARGENICO GBR.webp',  
            'img/soap.webp',  
        ],
        video: null,
        prices: { 'galon': 7.00, 'caneca': 27.00 },
        codes: { 'galon': '50826', 'caneca': '64246' },
        badge: null
    },
    {
        id: 16,
        name: 'Desengrasante Biodegradable',
        category: 'lavanderia',
        description: 'Detergente desengrasante neutro formulado para la limpieza diaria de superficies y textiles. Remueve suciedad ligera y grasa sin dañar materiales ni alterar colores. Su fórmula balanceada permite uso frecuente en entornos hospitalarios bajo protocolos de limpieza concurrente.',
        longDescription: 'Detergente desengrasante neutro formulado para la limpieza diaria de superficies y textiles. Remueve suciedad ligera y grasa sin dañar materiales ni alterar colores. Su fórmula balanceada permite uso frecuente en entornos hospitalarios bajo protocolos de limpieza concurrente.',
        features: [
            'pH neutro seguro',
            'Remueve grasa ligera',
            'Apto para uso continuo',
        ],
        images: [
            'img/deter100bio.webp',   
            'img/47623 DETERBIO GBR.webp',
            'img/47103 DETERBIO 20L.webp',
        ],
        video: null,
        prices: { '1L': 2.30, 'galon': 6.80, 'caneca': 32.80 },
        codes: { '1L': '48906', 'galon': '47623', 'caneca': '47103' },
        badge: null
    },
    {
        id: 17,
        name: 'Detergente Clorado',
        category: 'lavanderia',
        description: 'Detergente clorado para blanqueo y desinfeccion de ropa hospitalaria.',
        longDescription: 'Detergente clorado de alta eficacia para el blanqueo y desinfeccion de ropa hospitalaria. Elimina microorganismos y manchas organicas en un solo proceso.',
        features: [
            'Blanqueo y desinfeccion',
            'Elimina microorganismos',
            'Alta eficacia',
            'Economico',
            'Para uso en lavanderia industrial'
        ],
        images: [
            'img/deter100cl1.webp',   
            'img/35823 DET CLORADO GBR.webp',
            'img/35824 DET CLORADO 20L.webp',
            
        ],
        video: null,
        prices: { '1L': 1.74, 'galon': 4.13, 'caneca': 20.50 },
        codes: { '1L': '42286', 'galon': '37863', 'caneca': '35824' },
        badge: null
    },
    {
        id: 18,
        name: 'Deter 100 Pro',
        category: 'lavanderia',
        description: 'Detergente profesional de alta eficiencia para lavanderia hospitalaria industrial.',
        longDescription: 'Detergente profesional de alta concentracion para lavanderias hospitalarias industriales. Maxima eficacia en agua fria y caliente.',
        features: [
            'Alta concentracion',
            'Eficaz en frio y caliente',
            'Para lavanderia industrial',
            'Bajo espumado',
            'Alta eficiencia'
        ],
        images: [
           'img/Deter100pro',
            'img/deter100porg.webp', 
             'img/Deter100proc.webp',
        ],
        video: null,
        prices: { '1L': 3.00, 'galon': 9.00, 'caneca': 41.00 },
        codes: { '1L': '45088', 'galon': '54167', 'caneca': '592283' },
        badge: null
    },
    {
        id: 19,
        name: 'Tahor Bleach',
        category: 'lavanderia',
        description: 'Blanqueador técnico, diseñado para restaurar el color blanco en textiles hospitalarios y eliminar manchas de óxido y residuos minerales. Mejora la apariencia y cumple con estándares de higiene en lavandería institucional.',
        longDescription: 'Blanqueador técnico, diseñado para restaurar el color blanco en textiles hospitalarios y eliminar manchas de óxido y residuos minerales. Mejora la apariencia y cumple con estándares de higiene en lavandería institucional.',
        features: [
            'Alta acción blanqueadora',
            'Efectivo contra óxido y manchas minerales ',
        ],
        images: [
            'img/tahorbleach.webp', 
            'img/40283 TAHOR BLEAN GBC.webp', 
            'img/40286 TAHOR BLEACH 20L.webp', 
        ],
        video: null,
        prices: { '1L': 4.35, 'galon': 13.10, 'caneca': 52.00 },
        codes: { '1L': '40284', 'galon': '40283', 'caneca': '40286' },
        badge: null
    },
    {
        id: 20,
        name: 'Dioxigen Pro',
        category: 'lavanderia',
        description: 'Blanqueador oxigenado profesional para ropa hospitalaria delicada y de color.',
        longDescription: 'Blanqueador oxigenado profesional para ropa hospitalaria delicada y de color. No daña las fibras y mantiene los colores vivos.',
        features: [
            'Blanqueador oxigenado',
            'No daña fibras',
            'Para ropa de color',
            'Biodegradable',
            'Uso en frio'
        ],
        images: [
            'img/dioxigenpro1.webp',
            "img/dioxigen gl.webp", 
            "img/Dioxigenpro.webp",
        ],
        video: null,
        prices: { '1L': 3.00, 'galon': 10.00, 'caneca': 39.00 },
        codes: { '1L': '56226', 'galon': '52027', 'caneca': '56786' },
        badge: null
    },
    {
        id: 21,
        name: 'Tri Turbo (Percarbonato)',
        category: 'lavanderia',
        description: 'Detergente avanzado con percarbonato , diseñado para remover manchas orgánicas en textiles hospitalarios. Actúa sobre sangre, fluidos y residuos biológicos, proporcionando limpieza profunda sin necesidad de cloro agresivo.',
        longDescription: 'Detergente avanzado con percarbonato , diseñado para remover manchas orgánicas en textiles hospitalarios. Actúa sobre sangre, fluidos y residuos biológicos, proporcionando limpieza profunda sin necesidad de cloro agresivo.',
        features: [
            'Libera oxígeno activo (percarbonato)',
            'Contiene componentes especializados',
            'Alta capacidad de limpieza profunda ',
        ],
        images: [
            'img/triturbo.webp',
        ],
        video: null,
        prices: { '500ml': 3, '1L': 5 },
        codes: { '500ml': '64548', '1L': '64548' },
        badge: null
    },
    {
        id: 22,
        name: 'Detergente en Polvo',
        category: 'lavanderia',
        description: 'Detergente en polvo para lavado de ropa hospitalaria en lavadoras industriales.',
        longDescription: 'Detergente en polvo de alta eficacia para lavado de ropa hospitalaria en lavadoras industriales. Formula con enzimas y blanqueador optico.',
        features: [
            'Formula enzimática',
            'Blanqueador optico',
            'Para lavadoras industriales',
            'Bajo espumado',
            'Economico'
        ],
        images: [
            'img/detergenplvo.webp',  
        ],
        video: null,
        prices: { '500ml': 0.89, '1L': 1.69 },
        codes: { '500ml': '38235', '1L': '35841' },
        badge: null
    },
    {
        id: 23,
        name: 'Detergente Textil Enzimatico',
        category: 'lavanderia',
        description: 'Detergente textil enzimático formulado para eliminar manchas de origen biológico en lavandería hospitalaria. Actúa sobre sangre, fluidos y residuos orgánicos, facilitando su remoción sin dañar las fibras, mejorando la higiene y el rendimiento del lavado.',
        longDescription: 'Detergente textil enzimático formulado para eliminar manchas de origen biológico en lavandería hospitalaria. Actúa sobre sangre, fluidos y residuos orgánicos, facilitando su remoción sin dañar las fibras, mejorando la higiene y el rendimiento del lavado.',
        features: [
            'Contiene enzimas especializadas (proteasas, amilasas, etc.)',
            'Alta efectividad sobre materia orgánica',
            'Compatible con procesos de lavado hospitalario',
        ],
        images: [
            '', 
        


        ],
        video: null,
        prices: { '1L': 3.05, 'galon': 11.00, 'caneca': 43.00 },
        codes: { '1L': '52186', 'galon': '37456', 'caneca': '' },
        badge: null
    },

    {
        id: 24,
        name: 'JDM',
        category: 'higiene_de_manos',
        description: 'Jabón antiséptico formulado para eliminar bacterias de forma efectiva en manos. Ideal para uso frecuente en entornos hospitalarios, garantizando higiene y seguridad en cada lavado.',
        longDescription: 'Jabón antiséptico formulado para eliminar bacterias de forma efectiva en manos. Ideal para uso frecuente en entornos hospitalarios, garantizando higiene y seguridad en cada lavado.',
        features: [
            'Acción antibacteriana',
            'Uso frecuente seguro',
            'Ideal para protocolos clínicos',
        ],
        images: [
            'img/jdml1.webp',
            'img/jabonliquidogl.webp',
            'img/jabonliquidojdmc.webp', 
        ],
        video: null,
        prices: { '1L': 2.17, 'galon': 6.19, 'caneca': 27.00 },
        codes: { '1L': '35888', 'galon': '35891', 'caneca': '35982' },
        badge: null
    },
    {
        id: 25,
        name: 'Alcohol Antiseptico 70%',
        category: 'higiene_de_manos',
        description: 'Solución desinfectante de rápida acción que elimina bacterias y virus sin necesidad de enjuague. Ideal para uso hospitalario y personal.',
        longDescription: 'Solución desinfectante de rápida acción que elimina bacterias y virus sin necesidad de enjuague. Ideal para uso hospitalario y personal.',
        features: [
            'Acción inmediata',
            'Sin enjuague',
            'Alta eficacia',
        ],
        images: [
            'img/alcohol1l.webp',  
            'img/alcoholgl.webp',  
            'img/alcoantcane.webp'  
        ],
        video: null,
        prices: { '1L': 2.5, 'galon': 7.7, 'caneca': 35.8 },
        codes: { '1L': '35888', 'galon': '35891', 'caneca': '35674' },
        badge: null
    },
    {
        id: 26,
        name: 'Alcohol Gel 70%',
        category: 'higiene_de_manos',
        description: 'Gel antiséptico práctico para desinfección de manos en cualquier momento. Su fórmula permite rápida absorción y acción efectiva contra microorganismos.',
        longDescription: 'Gel antiséptico práctico para desinfección de manos en cualquier momento. Su fórmula permite rápida absorción y acción efectiva contra microorganismos.',
        features: [
            'Portátil',
            'Secado rápido',
            'Uso práctico',
        ],
        images: [
            'img/gl1l.webp',  
            'img/gelgl.webp', 
            'img/gelc.webp'  
        ],
        video: null,
        prices: { '1L': 2.99, 'galon': 9.75, 'caneca': 45.00 },
        codes: { '1L': '40072', 'galon': '40075', 'caneca': '41066' },
        badge: null
    },
    {
        id: 27,
        name: 'Dioxigen Agua Oxigenada',
        category: 'higiene_de_manos',
        description: 'Solución antiséptica de uso básico para limpieza de heridas y superficies. Actúa como desinfectante suave en protocolos hospitalarios.',
        longDescription: 'Solución antiséptica de uso básico para limpieza de heridas y superficies. Actúa como desinfectante suave en protocolos hospitalarios.',
        features: [
            'Acción antiséptica',
            'Uso básico seguro',
            'Aplicación versátil',
        ],
        images: [
            'img/dioxigenoxi.webp',
        ],
        video: null,
        prices: { 'galon': 2.83 },
        codes: { 'galon': '46705' },
        badge: null
    },
      {
        id: 28,
        name: 'Detergente Loquido con Aroma',
        category: 'lavanderia',
        description: 'Detergente líquido formulado para la limpieza eficiente de textiles en entornos hospitalarios. Combina poder de remoción de suciedad con un aroma controlado, mejorando la presentación de prendas sin interferir con los estándares de higiene institucional.',
        longDescription: 'Detergente líquido formulado para la limpieza eficiente de textiles en entornos hospitalarios. Combina poder de remoción de suciedad con un aroma controlado, mejorando la presentación de prendas sin interferir con los estándares de higiene institucional.',
        features: [
            'Alta capacidad de limpieza en ropa hospitalaria',
            'Fragancia controlada (no invasiva',
            'Compatible con procesos manuales y automáticos',
        ],
        images: [
            'img/.webp',  
            'img/.webp', 
            'img/.webp'  
        ],
        video: null,
        prices: { '1L': 2.00, 'galon': 5.00, 'caneca': 25.00 },
        codes: { '1L': '40072', 'galon': '40075', 'caneca': '41066' },
        badge: null
    },
    {
        id: 29,
        name: 'Suavizante con aroma',
        category: 'lavanderia',
        description: 'Suavizante textil diseñado para brindar mayor confort y frescura a prendas hospitalarias. Reduce la rigidez de las telas, facilita el planchado y deja un aroma agradable, mejorando la experiencia del usuario sin comprometer la limpieza.',
        longDescription: 'Suavizante textil diseñado para brindar mayor confort y frescura a prendas hospitalarias. Reduce la rigidez de las telas, facilita el planchado y deja un aroma agradable, mejorando la experiencia del usuario sin comprometer la limpieza.',
        features: [
            'Contiene agentes suavizantes de alta eficiencia',
            'Fragancia agradable y duradera ',
            'Reduce fricción en fibras textiles ',
        ],
        images: [
            'img/45002 SUAVIZANTE ARMONÍA GBR.webp', 
            'img/49326 DETERGENTE ALOE GLBR.webp'  
        ],
        video: null,
        prices: { '1L': 0.00, 'galon': 6.50, 'caneca': 0.00 },
        codes: { '1L': '0.00', 'galon': '0.00', 'caneca': '0.00' },
        badge: null
    },
        {
        id: 30,
        name: 'Neutralizante ácido',
        category: 'lavanderia',
        description: 'Neutralizante ácido formulado para corregir el pH residual en textiles después del proceso de lavado. Su combinación de ácidos orgánicos y agentes quelantes ayuda a eliminar residuos alcalinos, mejorando la suavidad, la seguridad y la durabilidad de las prendas hospitalarias.',
        longDescription: 'Neutralizante ácido formulado para corregir el pH residual en textiles después del proceso de lavado. Su combinación de ácidos orgánicos y agentes quelantes ayuda a eliminar residuos alcalinos, mejorando la suavidad, la seguridad y la durabilidad de las prendas hospitalarias.',
        features: [
            'Contiene ácido acético y ácido cítrico (neutralización efectiva)',
            'Incorpora agente quelante (EDTA) para control de minerales ',
            'Baja concentración de tensioactivo para mejor distribución  ',
        ],
        images: [
            'img/.webp',  
            'img/.webp', 
            'img/.webp'  
        ],
        video: null,
        prices: { '1L': 0.00, 'galon': 0.00, 'caneca': 0.00 },
        codes: { '1L': '0.00', 'galon': '0.00', 'caneca': '0.00' },
        badge: null
    },
];


const sizeLabels = {
    '500ml': '500 ml',
    '1L': '1 Litro',
    'galon': 'Galon ',
    'caneca': 'Caneca '
};

const sizeIcons = {
    '500ml': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2h8l2 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8l2-6z"/><path d="M6 8h12"/></svg>',
    '1L': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h12l2 8v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10l2-8z"/><path d="M4 10h16"/></svg>',
    'galon': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v4"/><path d="M15 3v4"/><path d="M3 10h18"/></svg>',
    'caneca': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>'
};

const IVA_RATE = 0.15;
const WHATSAPP_NUMBER = '+593958812843';

let cart = [];
let currentSlide = 0;
let sliderInterval;

const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const productModalContent = document.getElementById('productModalContent');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSummary = document.getElementById('checkoutSummary');
const categoriesGrid = document.getElementById('categoriesGrid');
const filterButtons = document.getElementById('filterButtons');
const productsGrid = document.getElementById('productsGrid');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const sliderDots = document.getElementById('sliderDots');
const newsletterForm = document.getElementById('newsletterForm');

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    renderCategories();
    renderFilterButtons();
    renderProducts();
    updateCartUI();
    initEventListeners();

        document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);

});

function initEventListeners() {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearch);
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.classList.remove('active');
        }
    });

    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    closeProductModal.addEventListener('click', closeProductModalFn);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModalFn();
    });

    closeCheckoutModal.addEventListener('click', closeCheckoutModalFn);
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckoutModalFn();
    });
    checkoutForm.addEventListener('submit', handleCheckout);

    prevSlide.addEventListener('click', () => changeSlide(-1));
    nextSlide.addEventListener('click', () => changeSlide(1));
    sliderDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            goToSlide(parseInt(e.target.dataset.slide));
        }
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por suscribirte a nuestro newsletter!');
        newsletterForm.reset();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.remove('active');
            }
        });
    });
}

function initSlider() {
    startSliderAutoplay();
}

function startSliderAutoplay() {
    sliderInterval = setInterval(() => changeSlide(1), 5000);
}

function stopSliderAutoplay() {
    clearInterval(sliderInterval);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    stopSliderAutoplay();
    startSliderAutoplay();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    stopSliderAutoplay();
    startSliderAutoplay();
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length < 2) {
        searchSuggestions.classList.remove('active');
        return;
    }
    const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    if (results.length > 0) {
        searchSuggestions.innerHTML = results.slice(0, 5).map(p => {
            const firstPrice = Object.values(p.prices)[0];
            return `
            <div class="suggestion-item" onclick="openProductModal(${p.id})">
                <img src="${p.images[0]}" alt="${p.name}">
                <div>
                    <div style="font-weight: 500; color: var(--foreground);">${p.name}</div>
                    <div style="font-size: 0.8125rem; color: var(--primary);">$${formatPrice(firstPrice)}</div>
                </div>
            </div>`;
        }).join('');
        searchSuggestions.classList.add('active');
    } else {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No se encontraron resultados</div>';
        searchSuggestions.classList.add('active');
    }
}

function renderCategories() {
    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat.id}" onclick="filterByCategory('${cat.id}')">
            <div class="category-icon">
                <span style="font-size: 2rem;">${cat.icon}</span>
            </div>
            <h4>${cat.name}</h4>
        </div>
    `).join('');
}

function renderFilterButtons() {
    const buttons = categories.map(cat => `
        <button class="filter-btn" data-category="${cat.id}" onclick="filterByCategory('${cat.id}')">${cat.name}</button>
    `).join('');
    filterButtons.innerHTML = `
        <button class="filter-btn active" data-category="all" onclick="filterByCategory('all')">Todos</button>
        ${buttons}
    `;
}

function filterByCategory(categoryId) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === categoryId);
    });
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.toggle('active', card.dataset.category === categoryId);
    });
    const filteredProducts = categoryId === 'all'
        ? products
        : products.filter(p => p.category === categoryId);
    renderProducts(filteredProducts);
}

function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = productsToRender.map(product => {
        const firstPrice = Object.values(product.prices)[0];
        return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'new' ? 'Nuevo' : '-15%'}</span>` : ''}
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        $${formatPrice(firstPrice)}
                        <span class="iva">+ IVA</span>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function getCategoryName(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const defaultSize = Object.keys(product.prices)[0];

    productModalContent.innerHTML = `
        <div class="product-modal-grid">
            <div class="product-modal-gallery">
                <div class="gallery-main" id="galleryMain">
                    <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">
                </div>
                <div class="gallery-thumbs">
                    ${product.images.map((img, i) => `
                        <div class="thumb ${i === 0 ? 'active' : ''}" onclick="changeGalleryImage('${img}', this)">
                            <img src="${img}" alt="Imagen ${i + 1}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">
                        </div>
                    `).join('')}
                    ${product.video ? `
                        <div class="thumb thumb-video" onclick="playVideo('${product.video}', this)">
                            <video src="${product.video}" muted></video>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1;">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="product-modal-info">
                <h2>${product.name}</h2>
                <span class="product-modal-category">${getCategoryName(product.category)}</span>
                <p class="product-modal-description">${product.longDescription}</p>
                <div class="product-modal-features">
                    <h4>Caracteristicas:</h4>
                    <ul>
                        ${product.features.map(f => `
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                ${f}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="size-selector">
                    <h4>Selecciona el tamano:</h4>
                    <div class="size-options" id="sizeOptions">
                        ${Object.entries(product.prices).map(([size, price]) => `
                            <div class="size-option ${size === defaultSize ? 'active' : ''}"
                                 data-size="${size}"
                                 data-price="${price}"
                                 onclick="selectSize('${size}', ${price}, ${product.id})">
                                <div class="size-icon">${sizeIcons[size] || sizeIcons['1L']}</div>
                                <span class="size-label">${sizeLabels[size] || size}</span>
                                <span class="size-price">$${formatPrice(price)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="product-modal-pricing" id="modalPricing">
                    <div class="pricing-detail">
                        <span class="pricing-label">Precio base</span>
                        <span class="pricing-value" id="basePrice">$${formatPrice(product.prices[defaultSize])}</span>
                    </div>
                    <div class="pricing-detail">
                        <span class="pricing-label">IVA (15%)</span>
                        <span class="pricing-value" id="ivaPrice">$${formatPrice((product.prices[defaultSize] * IVA_RATE).toFixed(2))}</span>
                    </div>
                    <div class="pricing-detail pricing-total">
                        <span class="pricing-label">Total</span>
                        <span class="pricing-value" id="totalPrice">$${formatPrice((product.prices[defaultSize] * (1 + IVA_RATE)).toFixed(2))}</span>
                    </div>
                </div>
                <div class="product-modal-actions">
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.id})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="8" cy="21" r="1"/>
                            <circle cx="19" cy="21" r="1"/>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                        </svg>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModalFn() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeGalleryImage(src, thumb) {
    document.getElementById('galleryMain').innerHTML = `<img src="${src}" alt="Producto" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

function playVideo(src, thumb) {
    document.getElementById('galleryMain').innerHTML = `<video src="${src}" controls autoplay></video>`;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

let selectedSize = '1L';
let selectedPrice = 0;

function selectSize(size, price, productId) {
    selectedSize = size;
    selectedPrice = price;
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.size === size);
    });
    const iva = (price * IVA_RATE);
    const total = (price * (1 + IVA_RATE));
    document.getElementById('basePrice').textContent = `$${formatPrice(price)}`;
    document.getElementById('ivaPrice').textContent = `$${formatPrice(iva.toFixed(2))}`;
    document.getElementById('totalPrice').textContent = `$${formatPrice(total.toFixed(2))}`;
}

function addToCartFromModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const activeSize = document.querySelector('.size-option.active');
    const size = activeSize ? activeSize.dataset.size : Object.keys(product.prices)[0];
    const price = product.prices[size];
    addToCart(productId, size, price);
    closeProductModalFn();
    openCart();
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const firstSize = Object.keys(product.prices)[0];
    addToCart(productId, firstSize, product.prices[firstSize]);
    openCart();
}

function addToCart(productId, size, price) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existingItem = cart.find(item => item.productId === productId && item.size === size);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ productId, size, price, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.productId === productId && item.size === size));
    updateCartUI();
}

function updateQuantity(productId, size, delta) {
    const item = cart.find(item => item.productId === productId && item.size === size);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <p>Tu carrito esta vacio</p>
            </div>`;
        cartSummary.innerHTML = '';
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        const itemTotal = item.price * item.quantity;
        const productCode = product.codes[item.size];
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${product.images[0]}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop'">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-code" style="font-size:0.75rem;color:var(--muted-foreground);margin-bottom:0.25rem;">[${productCode}]</div>
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-size">${sizeLabels[item.size] || item.size}</div>
                    <div class="cart-item-price">$${formatPrice(itemTotal)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.productId}, '${item.size}', -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.productId}, '${item.size}', 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.productId}, '${item.size}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        </svg>
                        Eliminar
                    </button>
                </div>
            </div>`;
    }).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const iva = subtotal * IVA_RATE;
    const total = subtotal + iva;


    cartSummary.innerHTML = `
        <div class="cart-summary-row"><span>Subtotal</span><span>$${formatPrice(subtotal)}</span></div>
        <div class="cart-summary-row"><span>IVA (15%)</span><span>$${formatPrice(iva)}</span></div>
        <div class="cart-summary-row total"><span>Total</span><span>$${formatPrice(total)}</span></div>
        <button class="btn btn-primary btn-full" onclick="openCheckoutModal()">Proceder al Pago</button>
    `;
}

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openCheckoutModal() {
    closeCartDrawer();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const iva = Math.round(subtotal * IVA_RATE);
    const total = subtotal + iva;

    checkoutSummary.innerHTML = `
        <h4>Resumen del Pedido</h4>
        <div class="checkout-items">
            ${cart.map(item => {
                const product = products.find(p => p.id === item.productId);
                const productCode = product.codes[item.size];
                return `
                    <div class="checkout-item">
                        <span class="checkout-item-name">[${productCode}] ${product.name} (${sizeLabels[item.size] || item.size}) x${item.quantity}</span>
                        <span class="checkout-item-price">$${formatPrice(item.price * item.quantity)}</span>
                    </div>`;
            }).join('')}
        </div>
        <div class="checkout-totals">
            <div class="checkout-row"><span>Subtotal</span><span>$${formatPrice(subtotal)}</span></div>
            <div class="checkout-row"><span>IVA (15%)</span><span>$${formatPrice(iva)}</span></div>
            <div class="checkout-row total"><span>Total a Pagar</span><span>$${formatPrice(total)}</span></div>
        </div>`;

    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModalFn() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function handleCheckout(e) {
    e.preventDefault();
    const formData = new FormData(checkoutForm);
    const data = {
        nombre: formData.get('nombre'),
        cedula: formData.get('cedula'),
        email: formData.get('email'),
        celular: formData.get('celular'),
        direccion: formData.get('direccion'),
        ciudad: formData.get('ciudad'),
        provincia: formData.get('provincia'),
        notas: formData.get('notas')
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const iva = subtotal * IVA_RATE;
    const total = subtotal + iva;

    let message = ` *NUEVO PEDIDO - TAHOR CLEAN SECTOR HOSPITALARIO*\n\n`;
    message += `*DATOS DEL CLIENTE*\n`;
    message += `Nombre: ${data.nombre}\n`;
    message += `Cedula/NIT: ${data.cedula}\n`;
    message += `Email: ${data.email}\n`;
    message += `Celular: ${data.celular}\n`;
    message += `Direccion: ${data.direccion}\n`;
    message += `Ciudad: ${data.ciudad}, ${data.provincia}\n`;
    if (data.notas) message += `Notas: ${data.notas}\n`;
    message += `\n*PRODUCTOS*\n`;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const itemTotal = item.price * item.quantity;
        const itemTotalWithIva = Math.round(itemTotal * (1 + IVA_RATE));
        const productCode = product.codes[item.size];
       message += `- [${productCode}] ${product.name} (${sizeLabels[item.size] || item.size}) x${item.quantity} = $${formatPrice(itemTotal)}\n`;    });

    message += `\n*RESUMEN*\n`;
    message += `Subtotal: $${formatPrice(subtotal)}\n`;
    message += `IVA (15%): $${formatPrice(iva)}\n`;
    message += `*TOTAL: $${formatPrice(total)}*\n\n`;
    message += `Gracias por su pedido! `;

    const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/593958812843?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    cart = [];
    updateCartUI();
    closeCheckoutModalFn();
    checkoutForm.reset();
    alert('Tu pedido ha sido enviado por WhatsApp. Te contactaremos pronto!');
}

function formatPrice(price) {
    return Number(price).toLocaleString('es-EC', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


window.openProductModal = openProductModal;
window.changeGalleryImage = changeGalleryImage;
window.playVideo = playVideo;
window.selectSize = selectSize;
window.addToCartFromModal = addToCartFromModal;
window.quickAddToCart = quickAddToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.openCheckoutModal = openCheckoutModal;
window.filterByCategory = filterByCategory;

if (cartBtn) cartBtn.addEventListener('click', openCart);
if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModalFn();
});

function closeProductModalFn() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.modal-close')) {
        closeProductModalFn();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModalFn();
        closeCartDrawer();
    }
});
