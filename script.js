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
        description: 'Desinfectante de alto espectro para superficies hospitalarias. Elimina el 99.9% de bacterias y virus.',
        longDescription: 'Formulacion avanzada desarrollada especificamente para entornos hospitalarios. Eficaz contra bacterias, virus, hongos y esporas. Ideal para quirofanos, UCI, salas de procedimientos y areas criticas.',
        features: [
            'Elimina 99.9% de germenes',
            'Accion rapida en 30 segundos',
            'No deja residuos toxicos',
            'Compatible con superficies delicadas',
            'Registro INVIMA'
        ],
        images: [
            'img/59628 DETEROXI GLBR.webp',   // caneca 20L
            'img/58586 DETEROXI 20L.webp',  // galon
        ],
        video: null,
        prices: { '1L': 2.19, 'galon': 8.93, 'caneca': 32.2 },
        codes: { '1L': '59627', 'galon': '59628', 'caneca': '58586' },
        badge: 'new'
    },
    {
        id: 2,
        name: 'Desengrasante biodegradable',
        category: 'detergentes',
        description: 'Detergente con enzimas para limpieza profunda de instrumental medico y superficies.',
        longDescription: 'Detergente enzimatico de triple accion formulado para la limpieza previa a la esterilizacion de instrumental medico. Contiene proteasas, lipasas y amilasas.',
        features: [
            'Triple accion enzimatica',
            'Biodegradable',
            'pH neutro',
            'Seguro para instrumental',
            'Concentrado de alto rendimiento'
        ],
        images: [
            'img/47103 DETERBIO 20L.webp',   // caneca 20L
            'img/47623 DETERBIO GBR.webp',   // galon
        ],
        video: null,
        prices: { '1L': 2.3, 'galon': 6.8, 'caneca': 32.8 },
        codes: { '1L': '48906', 'galon': '47623', 'caneca': '47103' },
        badge: null
    },
    {
        id: 3,
        name: 'Tahor Wash',
        category: 'detergentes',
        description: 'Solucion antiseptica para lavado quirurgico de manos. Formula con clorhexidina al 4%.',
        longDescription: 'Antiseptico de amplio espectro con clorhexidina gluconato al 4%. Indicado para la antisepsia quirurgica de manos y antebrazos antes de procedimientos invasivos.',
        features: [
            'Clorhexidina 4%',
            'Efecto residual prolongado',
            'Suave con la piel',
            'Fragancia neutra',
            'Aprobado por FDA'
        ],
        images: [
            'img/35922 TAHOR WASH 20L.webp',  // caneca 20L
            'img/35921 TAHOR WASH GLT.webp', // galon
        ],
        video: null,
        prices: { '1L': 2.6, 'galon': 9.57, 'caneca': 36.46 },
        codes: { '1L': '50367', 'galon': '35920', 'caneca': '35922' },
        badge: 'sale'
    },
    {
        id: 4,
        name: 'Detergente clorado',
        category: 'detergentes',
        description: 'Limpiador y desinfectante para pisos hospitalarios. Accion 2 en 1 con aroma fresco.',
        longDescription: 'Limpiador desinfectante concentrado para pisos de hospitales, clinicas y laboratorios. Formula 2 en 1 que limpia y desinfecta en una sola aplicacion.',
        features: [
            'Accion 2 en 1',
            'Alto poder desengrasante',
            'Aroma duradero',
            'No requiere enjuague',
            'Concentrado economico'
        ],
        images: [

            'img/35823 DET CLORADO GBR.webp',
            'img/35824 DET CLORADO 20L.webp',  // caneca 20L
              // galon
        ],
        video: null,
        prices: { '1L': 1.74, 'galon': 4.13, 'caneca': 20.5 },
        codes: { '1L': '42286', 'galon': '37863', 'caneca': '35824' },
        badge: null
    },
    {
        id: 5,
        name: 'Acido Sanitizante',
        category: 'detergentes',
        description: 'Solucion especial para limpieza y mantenimiento de instrumental quirurgico.',
        longDescription: 'Solucion de limpieza especialmente formulada para instrumental quirurgico y medico. Protege contra la corrosion y facilita la esterilizacion posterior.',
        features: [
            'Proteccion anticorrosiva',
            'Compatible con ultrasonido',
            'No daña acabados',
            'Biodegradable',
            'Facil enjuague'
        ],
        images: [

            'img/35857 ACIDO ZANITIZANTE GLB.webp', // galon
            'img/35658 AC SANITIZANTE 20L.webp',  // caneca 20L
        ],
        video: null,
        prices: { '1L': 3.1, 'galon': 11.4, 'caneca': 49.7 },
        codes: { '1L': '35656', 'galon': '35657', 'caneca': '35658' },
        badge: 'new'
    },
    {
        id: 6,
        name: 'Seguriclean Baños',
        category: 'detergentes',
        description: 'Limpiador desinfectante para baños hospitalarios. Elimina sarro, hongos y bacterias.',
        longDescription: 'Limpiador desinfectante profesional especialmente formulado para baños de hospitales y clinicas. Elimina sarro, hongos, bacterias y malos olores en una sola aplicacion.',
        features: [
            'Accion antibacterial',
            'Neutraliza olores',
            'Fragancia hipoalergenica',
            'Larga duracion',
            'Presentacion aerosol'
        ],
        images: [
            'img/59212 SEGURICELAN BAÑO.webp',         // 1L
            'img/59212 SEGURICLEAN BAÑO GLR.webp',     // galon  — mismo codigo, imagen galon
            'img/59267 SEGURICLEAN BAÑO 20L (3).webp', // caneca 20L
        ],
        video: null,
        prices: { '1L': 2.6, 'galon': 8.26, 'caneca': 37.4 },
        codes: { '1L': '61046', 'galon': '59212', 'caneca': '59267' },
        badge: null
    },
    {
        id: 7,
        name: 'Oxi Quats',
        category: 'desinfectantes_alto_nivel',
        description: 'Desinfectante de alto nivel con amonio cuaternario y peróxido. Accion rapida y amplio espectro.',
        longDescription: 'Desinfectante de alto nivel con amonio cuaternario de quinta generacion. Eficaz contra bacterias, virus, hongos y micobacterias. Ideal para superficies criticas en entornos hospitalarios.',
        features: [
            'Amplio espectro',
            'Accion rapida',
            'Economia en uso',
            'Alta estabilidad',
            'Registro sanitario'
        ],
        images: [

            'img/48085 OXI QUATS GBC.webp',   // galon
            'img/46730 OXIQUATS 20L.webp',    // caneca 20L
        ],
        video: null,
        prices: { '1L': 3.47, 'galon': 10, 'caneca': 43 },
        codes: { '1L': '47925', 'galon': '48085', 'caneca': '46730' },
        badge: 'sale'
    },
    {
        id: 8,
        name: 'Sanitizer TC',
        category: 'desinfectantes_alto_nivel',
        description: 'Desinfectante de alto nivel para instrumental y superficies criticas hospitalarias.',
        longDescription: 'Desinfectante de alto nivel formulado para la desinfeccion de instrumental medico y superficies criticas. Alta eficacia contra bacterias, virus y hongos.',
        features: [
            'Desinfeccion alto nivel',
            'Accion rapida',
            'Compatible con instrumental',
            'No corrosivo',
            'Registro sanitario'
        ],
        images: [

            'img/35657 SANITIZER TC.webp',
            'img/35658 SANITIZER 20L.webp',   // caneca 20L — codigo similar
                // presentacion TC
        ],
        video: null,
        prices: { '1L': 3.26, 'galon': 7.92, 'caneca': 30.59 },
        codes: { '1L': '35954', 'galon': '35955', 'caneca': '35956' },
        badge: null
    },
    {
        id: 9,
        name: 'Sanibat',
        category: 'desinfectantes_alto_nivel',
        description: 'Desinfectante bactericida y virucida para superficies hospitalarias de alto trafico.',
        longDescription: 'Desinfectante de amplio espectro con accion bactericida, virucida y fungicida. Formulado para la desinfeccion de superficies hospitalarias de alto trafico.',
        features: [
            'Bactericida y virucida',
            'Secado rapido',
            'No mancha superficies',
            'No pegajoso',
            'Registro sanitario'
        ],
        images: [

            'img/35969 SANIBAT GLBR.webp',
            'img/36971 SANIBAT 20L.webp',    // caneca 20L
               // galon
        ],
        video: null,
        prices: { '1L': 2.39, 'galon': 7.83, 'caneca': 34.75 },
        codes: { '1L': '35968', 'galon': '45623', 'caneca': '35971' },
        badge: null
    },
    {
        id: 10,
        name: 'Dioxigen HD',
        category: 'desinfectantes_rutinarios',
        description: 'Desinfectante a base de dioxido de cloro para superficies hospitalarias de alto nivel.',
        longDescription: 'Desinfectante a base de dioxido de cloro de alta pureza. Eficaz contra bacterias, virus, hongos y esporas. Ideal para areas criticas hospitalarias.',
        features: [
            'Dioxido de cloro puro',
            'Amplio espectro',
            'Accion rapida',
            'No corrosivo en uso diluido',
            'Registro sanitario'
        ],
        images: [

            'img/41663 DIOXIGENT HD.webp',
            'img/46464 DIOXIGENT HD 20L.webp',  // caneca 20L
       // presentacion
        ],
        video: null,
        prices: { '1L': 3.5, 'galon': 9.14, 'caneca': 39.3 },
        codes: { '1L': '45363', 'galon': '41663', 'caneca': '46464' },
        badge: null
    },
    {
        id: 11,
        name: 'Dioxigen Multiusos',
        category: 'desinfectantes_rutinarios',
        description: 'Desinfectante multiusos para limpieza rutinaria de superficies hospitalarias.',
        longDescription: 'Desinfectante multiusos de uso rutinario para la limpieza y desinfeccion de superficies hospitalarias. Formula equilibrada para uso diario.',
        features: [
            'Uso multiusos',
            'Accion bactericida',
            'Fragancia agradable',
            'No requiere enjuague',
            'Economico'
        ],
        images: [
            'img/56567 DIOXIGENT MULTIUSOS.webp', // presentacion
        ],
        video: null,
        prices: { '1L': 2.18, 'galon': 9.65, 'caneca': 34.7 },
        codes: { '1L': '56568', 'galon': '56567', 'caneca': '59106' },
        badge: null
    },
    {
        id: 12,
        name: 'Peroxy',
        category: 'desinfectantes_rutinarios',
        description: 'Desinfectante a base de peroxido de hidrogeno para superficies y equipos hospitalarios.',
        longDescription: 'Desinfectante a base de peroxido de hidrogeno estabilizado. Eficaz contra un amplio espectro de microorganismos. Ecologico y sin residuos toxicos.',
        features: [
            'Peroxido de hidrogeno',
            'Ecologico',
            'Sin residuos toxicos',
            'Amplio espectro',
            'Registro sanitario'
        ],
        images: [
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop',
        ],
        video: null,
        prices: { 'galon': 4.46 },
        codes: { 'galon': '39069' },
        badge: null
    },
    {
        id: 13,
        name: 'Sanibat D',
        category: 'desinfectantes_rutinarios',
        description: 'Desinfectante de uso rutinario para superficies y pisos hospitalarios.',
        longDescription: 'Desinfectante de uso rutinario con accion bactericida y fungicida. Formulado para la limpieza y desinfeccion diaria de superficies y pisos hospitalarios.',
        features: [
            'Uso rutinario',
            'Bactericida y fungicida',
            'Facil aplicacion',
            'Economico',
            'Registro sanitario'
        ],
        images: [

            'img/35969 SANIBAT GLBR.webp',
            'img/36971 SANIBAT 20L.webp',   // reutiliza imagen sanibat
            
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
        description: 'Detergente liquido hipoalergenico para ropa hospitalaria delicada.',
        longDescription: 'Detergente liquido hipoalergenico especialmente formulado para el lavado de ropa hospitalaria delicada. Sin fragancia y con pH neutro.',
        features: [
            'Hipoalergenico',
            'pH neutro',
            'Sin fragancia',
            'Biodegradable',
            'Alta eficiencia'
        ],
        images: [
            'img/DETER HIPOALARGENICO GBR.webp',  // galon
        ],
        video: null,
        prices: { 'galon': 3.92, 'caneca': 15.65 },
        codes: { 'galon': '50826', 'caneca': '64246' },
        badge: null
    },
    {
        id: 16,
        name: 'Desengrasante Biodegradable',
        category: 'lavanderia',
        description: 'Desengrasante biodegradable para ropa con manchas de grasa y aceite.',
        longDescription: 'Desengrasante biodegradable de alta eficacia para el pretratamiento de ropa hospitalaria con manchas de grasa, aceite y otros contaminantes grasos.',
        features: [
            'Biodegradable',
            'Alta eficacia desengrasante',
            'Pretratamiento ropa',
            'pH neutro',
            'Concentrado'
        ],
        images: [

            'img/47623 DETERBIO GBR.webp',
            'img/47103 DETERBIO 20L.webp',
        ],
        video: null,
        prices: { '1L': 2.3, 'galon': 6.8, 'caneca': 32.8 },
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

            'img/35823 DET CLORADO GBR.webp',
            'img/35824 DET CLORADO 20L.webp',
            
        ],
        video: null,
        prices: { '1L': 1.74, 'galon': 4.13, 'caneca': 20.5 },
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
            'img/deter100pro.webp', 
            'img/deter100porg.webp',
             'img/deter100proc.webp',
        ],
        video: null,
        prices: { '1L': 2.6, 'galon': 8.69, 'caneca': 39.2 },
        codes: { '1L': '45088', 'galon': '54167', 'caneca': '592283' },
        badge: null
    },
    {
        id: 19,
        name: 'Tahor Bleach',
        category: 'lavanderia',
        description: 'Blanqueador institucional para ropa blanca hospitalaria de alto rendimiento.',
        longDescription: 'Blanqueador institucional de alta concentracion para ropa blanca hospitalaria. Elimina manchas, blanquea y desinfecta en un solo proceso.',
        features: [
            'Blanqueador de alto nivel',
            'Elimina manchas',
            'Desinfecta',
            'Alta concentracion',
            'Economico'
        ],
        images: [

            'img/40283 TAHOR BLEAN GBC.webp', 
            'img/40286 TAHOR BLEACH 20L.webp',  // caneca 20L
              // galon
        ],
        video: null,
        prices: { '1L': 4.35, 'galon': 13.1, 'caneca': 52 },
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
        prices: { '1L': 2.4, 'galon': 7.18, 'caneca': 34.7 },
        codes: { '1L': '56226', 'galon': '52027', 'caneca': '56786' },
        badge: null
    },
    {
        id: 21,
        name: 'Tri Turbo (Percarbonato)',
        category: 'lavanderia',
        description: 'Percarbonato de sodio para blanqueo y desinfeccion de ropa hospitalaria.',
        longDescription: 'Percarbonato de sodio de alta pureza para blanqueo y desinfeccion de ropa hospitalaria. Ecologico y biodegradable.',
        features: [
            'Percarbonato de sodio',
            'Ecologico',
            'Biodegradable',
            'Sin cloro',
            'Alta eficacia'
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
            '',  // referencia polvo
            '',
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
        description: 'Detergente textil enzimatico para ropa hospitalaria con manchas organicas difíciles.',
        longDescription: 'Detergente textil enzimatico de triple accion para ropa hospitalaria con manchas organicas difíciles. Contiene proteasas, lipasas y amilasas.',
        features: [
            'Triple accion enzimatica',
            'Elimina manchas organicas',
            'Compatible con todas las fibras',
            'Biodegradable',
            'Alta eficiencia'
        ],
        images: [
            '',  // caneca textil aloe
            '',        // galon aloe
        ],
        video: null,
        prices: { '1L': 3.05, 'galon': 9.13 },
        codes: { '1L': '52186', 'galon': '37456' },
        badge: null
    },

    // ── HIGIENE DE MANOS ────────────────────────────────────────────────────
    {
        id: 24,
        name: 'JDM',
        category: 'higiene_de_manos',
        description: 'Jabon desinfectante de manos para uso hospitalario. Formula suave y antibacterial.',
        longDescription: 'Jabon desinfectante de manos especialmente formulado para uso hospitalario. Elimina bacterias y virus manteniendo la piel hidratada.',
        features: [
            'Antibacterial',
            'Suave con la piel',
            'Hidratante',
            'Sin olor fuerte',
            'Para uso frecuente'
        ],
        images: [
            'img/jabonliquidogl.webp',  // galon
        ],
        video: null,
        prices: { '1L': 1.53, 'galon': 4.13 },
        codes: { '1L': '35888', 'galon': '35891' },
        badge: null
    },
    {
        id: 25,
        name: 'Alcohol Antiseptico 70%',
        category: 'higiene_de_manos',
        description: 'Alcohol antiseptico al 70% para desinfeccion de manos y superficies.',
        longDescription: 'Alcohol antiseptico al 70% de etanol para desinfeccion rapida de manos y superficies. Accion virucida y bactericida comprobada.',
        features: [
            'Alcohol 70% etanol',
            'Virucida y bactericida',
            'Secado rapido',
            'Sin residuos',
            'Uso en manos y superficies'
        ],
        images: [
            'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
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
        description: 'Gel antibacterial con 70% de alcohol para higiene de manos sin agua.',
        longDescription: 'Gel antibacterial con 70% de alcohol etilico, ideal para la higiene de manos en situaciones donde no hay acceso a agua y jabon. Secado rapido y no pegajoso.',
        features: [
            'Alcohol 70%',
            'Secado rapido',
            'Humectantes incluidos',
            'No pegajoso',
            'Portable'
        ],
        images: [
            'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
        ],
        video: null,
        prices: { '1L': 2.99, 'galon': 9.75, 'caneca': 45 },
        codes: { '1L': '40072', 'galon': '40075', 'caneca': '41066' },
        badge: null
    },
    {
        id: 27,
        name: 'Dioxigen Agua Oxigenada',
        category: 'higiene_de_manos',
        description: 'Agua oxigenada al 3% para antisepsia de heridas y desinfeccion de manos.',
        longDescription: 'Agua oxigenada (peroxido de hidrogeno) al 3% para antisepsia de heridas menores y desinfeccion complementaria de manos. De uso medico controlado.',
        features: [
            'Peroxido de hidrogeno 3%',
            'Antiseptico de heridas',
            'Ecologico',
            'Sin residuos toxicos',
            'Uso medico'
        ],
        images: [
            'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
        ],
        video: null,
        prices: { 'galon': 2.83 },
        codes: { 'galon': '46705' },
        badge: null
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// El resto del archivo permanece IGUAL que el original
// ─────────────────────────────────────────────────────────────────────────────

const sizeLabels = {
    '500ml': '500 ml',
    '1L': '1 Litro',
    'galon': 'Galon (3.8L)',
    'caneca': 'Caneca (20L)'
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
    const iva = Math.round(subtotal * IVA_RATE);
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
        message += `- [${productCode}] ${product.name} (${sizeLabels[item.size] || item.size}) x${item.quantity} = $${formatPrice(itemTotalWithIva)} (IVA ${Math.round(IVA_RATE * 100)}% incluido)\n`;
    });

    message += `\n*RESUMEN*\n`;
    message += `Subtotal: $${formatPrice(subtotal)}\n`;
    message += `IVA (15%): $${formatPrice(iva)}\n`;
    message += `*TOTAL: $${formatPrice(total)}*\n\n`;
    message += `Gracias por su pedido! `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+593958812843?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    cart = [];
    updateCartUI();
    closeCheckoutModalFn();
    checkoutForm.reset();
    alert('Tu pedido ha sido enviado por WhatsApp. Te contactaremos pronto!');
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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

document.addEventListener('click', (e) => {
    if (e.target.closest('#closeProductModal')) {
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
document.addEventListener('click', (e) => {
    if (e.target.closest('#closeCart')) {
        closeCartDrawer();
    }
});
productsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;

    const id = card.dataset.id;
    openProductModal(parseInt(id));
});

const state = {
    cart: [],
    currentSlide: 0,
    sliderInterval: null,
    selectedSize: '1L',
    selectedPrice: 0
};

