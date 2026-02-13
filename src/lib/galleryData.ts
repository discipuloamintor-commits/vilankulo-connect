import img1 from "@/assets/gallery/laboratorio-quimica-professor-alunos-colegio-ekosekeleka.jpg";
import img2 from "@/assets/gallery/computadores-aula-informatica-aluno-colegio-ekosekeleka.jpg";
import img3 from "@/assets/gallery/artes-pintura-ensino-primario-alunos-colegio-ekosekeleka.jpg";
import img4 from "@/assets/gallery/institucional-logo-alunos-colegio-ekosekeleka.jpg";
import img5 from "@/assets/gallery/experiencia-cientifica-laboratorio-aluna-colegio-ekosekeleka.jpg";
import img6 from "@/assets/gallery/educacao-fisica-treino-alunos-colegio-ekosekeleka.jpg";
import img7 from "@/assets/gallery/interacao-patio-professor-alunos-colegio-ekosekeleka.jpg";
import img8 from "@/assets/gallery/aula-artes-supervisao-professor-colegio-ekosekeleka.jpg";
import img9 from "@/assets/gallery/detalhe-pintura-alunos-criatividade-colegio-ekosekeleka.jpg";
import img10 from "@/assets/gallery/infraestrutura-patio-toldos-colegio-ekosekeleka.jpg";
import img11 from "@/assets/gallery/biblioteca-espaco-estudo-colegio-ekosekeleka.jpg";
import img12 from "@/assets/gallery/sala-informatica-computadores-colegio-ekosekeleka.jpg";
import img13 from "@/assets/gallery/fachada-moderna-colegio-ekosekeleka.jpg";
import img14 from "@/assets/gallery/pavilhao-desportivo-basquete-colegio-ekosekeleka.jpg";
import img15 from "@/assets/gallery/vista-area-patio-colegio-ekosekeleka.jpg";
import img16 from "@/assets/gallery/evento-escolar-certificados-pais-alunos-colegio-ekosekeleka.jpg";
import img17 from "@/assets/gallery/estudo-tecnologia-informatica-alunas-colegio-ekosekeleka.jpg";
import img18 from "@/assets/gallery/modelos-anatomicos-laboratorio-biologia-colegio-ekosekeleka.jpg";
import img19 from "@/assets/gallery/pesquisa-tecnologica-computadores-alunos-colegio-ekosekeleka.jpg";
import img20 from "@/assets/gallery/apresentacao-cultural-musica-alunos-colegio-ekosekeleka.jpg";
import img21 from "@/assets/gallery/hora-do-conto-leitura-alunos-colegio-ekosekeleka.jpg";
import img22 from "@/assets/gallery/feira-escolar-comunidade-colegio-ekosekeleka.jpg";
import img23 from "@/assets/gallery/experiencia-quimica-laboratorio-foco-colegio-ekosekeleka.jpg";
import img24 from "@/assets/gallery/analise-laboratorio-estudo-focado-aluna-colegio-ekosekeleka.jpg";
import img25 from "@/assets/gallery/treino-educacao-fisica-campo-colegio-ekosekeleka.jpg";

export type Category =
    | "science"
    | "tech"
    | "primary"
    | "secondary"
    | "sports"
    | "life"
    | "infrastructure";

export interface GalleryItem {
    id: string;
    src: string;
    category: Category;
    title: { pt: string; en: string };
    description: { pt: string; en: string };
    alt: { pt: string; en: string };
}

export const galleryData: GalleryItem[] = [
    {
        id: "1",
        src: img1,
        category: "science",
        title: { pt: "Laboratório de Química", en: "Chemistry Laboratory" },
        description: { pt: "Alunos explorando conceitos práticos com supervisão docente.", en: "Students exploring practical concepts under faculty supervision." },
        alt: { pt: "Professor e alunos em laboratório de química do Colégio Ekosekeleka", en: "Teacher and students in chemistry lab at Ekosekeleka School" }
    },
    {
        id: "2",
        src: img2,
        category: "tech",
        title: { pt: "Literacia Digital", en: "Digital Literacy" },
        description: { pt: "Desenvolvimento de competências tecnológicas essenciais.", en: "Developing essential technological skills." },
        alt: { pt: "Aluno em aula de informática no Colégio Ekosekeleka", en: "Student in computer science class at Ekosekeleka School" }
    },
    {
        id: "3",
        src: img3,
        category: "primary",
        title: { pt: "Expressão Artística", en: "Artistic Expression" },
        description: { pt: "Estimulando a criatividade e motricidade fina no ensino primário.", en: "Stimulating creativity and fine motor skills in primary education." },
        alt: { pt: "Crianças pintando em sala de aula no Colégio Ekosekeleka", en: "Children painting in classroom at Ekosekeleka School" }
    },
    {
        id: "4",
        src: img4,
        category: "life",
        title: { pt: "Identidade Institucional", en: "Institutional Identity" },
        description: { pt: "Nossos alunos carregam o orgulho da marca Ekosekeleka.", en: "Our students carry the pride of the Ekosekeleka brand." },
        alt: { pt: "Alunos posando em frente ao logo do Colégio Ekosekeleka", en: "Students posing in front of Ekosekeleka School logo" }
    },
    {
        id: "5",
        src: img5,
        category: "science",
        title: { pt: "Experiência Prática", en: "Hands-on Experience" },
        description: { pt: "Ciência viva através de experiências laboratoriais dinâmicas.", en: "Live science through dynamic laboratory experiments." },
        alt: { pt: "Aluna realizando experiência científica no Colégio Ekosekeleka", en: "Student performing scientific experiment at Ekosekeleka School" }
    },
    {
        id: "6",
        src: img6,
        category: "sports",
        title: { pt: "Formação Física", en: "Physical Education" },
        description: { pt: "Promoção da saúde e disciplina através do desporto escolar.", en: "Promoting health and discipline through school sports." },
        alt: { pt: "Alunos em aula de educação física no Colégio Ekosekeleka", en: "Students in physical education class at Ekosekeleka School" }
    },
    {
        id: "7",
        src: img7,
        category: "life",
        title: { pt: "Interação no Pátio", en: "Campus Interaction" },
        description: { pt: "Ambiente acolhedor que favorece a socialização.", en: "Welcoming environment that promotes socialization." },
        alt: { pt: "Professor conversando com alunos no pátio da escola", en: "Teacher talking to students in the school patio" }
    },
    {
        id: "8",
        src: img8,
        category: "primary",
        title: { pt: "Apoio Pedagógico", en: "Pedagogical Support" },
        description: { pt: "Educação personalizada com foco no desenvolvimento individual.", en: "Personalized education focused on individual development." },
        alt: { pt: "Professor auxiliando alunos em atividade de artes", en: "Teacher helping students in art activity" }
    },
    {
        id: "9",
        src: img9,
        category: "primary",
        title: { pt: "Criatividade Infantil", en: "Children's Creativity" },
        description: { pt: "Explorando cores e formas nos primeiros anos de escolaridade.", en: "Exploring colors and shapes in the first years of schooling." },
        alt: { pt: "Detalhe de alunos realizando pintura criativa", en: "Detail of students performing creative painting" }
    },
    {
        id: "10",
        src: img10,
        category: "infrastructure",
        title: { pt: "Campus Estruturado", en: "Structured Campus" },
        description: { pt: "Instalações modernas projetadas para o bem-estar dos alunos.", en: "Modern facilities designed for student well-being." },
        alt: { pt: "Vista do pátio escolar com coberturas motorizadas", en: "School patio view with motorized covers" }
    },
    {
        id: "11",
        src: img11,
        category: "infrastructure",
        title: { pt: "Biblioteca e Estudo", en: "Library & Study Space" },
        description: { pt: "Espaço dedicado à pesquisa, leitura e concentração.", en: "Dedicated space for research, reading, and concentration." },
        alt: { pt: "Interior da biblioteca do Colégio Ekosekeleka", en: "Interior of Ekosekeleka School library" }
    },
    {
        id: "12",
        src: img12,
        category: "tech",
        title: { pt: "Laboratório de TI", en: "IT Laboratory" },
        description: { pt: "Tecnologia de ponta a serviço da aprendizagem.", en: "Cutting-edge technology at the service of learning." },
        alt: { pt: "Sala de informática com computadores modernos", en: "IT room with modern computers" }
    },
    {
        id: "13",
        src: img13,
        category: "infrastructure",
        title: { pt: "Fachada Principal", en: "Main Entrance" },
        description: { pt: "Ambiente institucional profissional e seguro.", en: "Professional and secure institutional environment." },
        alt: { pt: "Fachada moderna do Colégio Ekosekeleka em Vilankulo", en: "Modern facade of Ekosekeleka School in Vilankulo" }
    },
    {
        id: "14",
        src: img14,
        category: "sports",
        title: { pt: "Pavilhão Desportivo", en: "Sports Pavilion" },
        description: { pt: "Prática de basquetebol e outras modalidades indoor.", en: "Basketball and other indoor sports practice." },
        alt: { pt: "Campo de basquetebol coberto do Colégio Ekosekeleka", en: "Covered basketball court at Ekosekeleka School" }
    },
    {
        id: "15",
        src: img15,
        category: "infrastructure",
        title: { pt: "Pátio Central", en: "Central Courtyard" },
        description: { pt: "Espaços amplos para recreação e eventos.", en: "Ample spaces for recreation and events." },
        alt: { pt: "Vista ampla do pátio interno da escola", en: "Wide view of the school's internal patio" }
    },
    {
        id: "16",
        src: img16,
        category: "life",
        title: { pt: "Celebração do Sucesso", en: "Celebrating Success" },
        description: { pt: "Momentos de reconhecimento e graduação académica.", en: "Moments of recognition and academic graduation." },
        alt: { pt: "Evento de entrega de certificados com pais e alunos", en: "Certificate delivery event with parents and students" }
    },
    {
        id: "17",
        src: img17,
        category: "secondary",
        title: { pt: "Foco Académico", en: "Academic Focus" },
        description: { pt: "Ensino secundário alinhado aos padrões internacionais.", en: "Secondary education aligned with international standards." },
        alt: { pt: "Alunas do secundário estudando em ambiente de TI", en: "Secondary students studying in IT environment" }
    },
    {
        id: "18",
        src: img18,
        category: "science",
        title: { pt: "Ciências Naturais", en: "Natural Sciences" },
        description: { pt: "Modelos anatômicos para um estudo detalhado da biologia.", en: "Anatomical models for a detailed study of biology." },
        alt: { pt: "Exposição de modelos anatômicos no laboratório de biologia", en: "Anatomical models display in the biology lab" }
    },
    {
        id: "19",
        src: img19,
        category: "tech",
        title: { pt: "Pesquisa Avançada", en: "Advanced Research" },
        description: { pt: "Alunos preparados para a era da informação global.", en: "Students prepared for the global information era." },
        alt: { pt: "Alunos do secundário realizando pesquisa em computadores", en: "Secondary students performing research on computers" }
    },
    {
        id: "20",
        src: img20,
        category: "life",
        title: { pt: "Expressão Cultural", en: "Cultural Expression" },
        description: { pt: "Valorização das artes e talentos musicais dos alunos.", en: "Valuing students' arts and musical talents." },
        alt: { pt: "Alunos em apresentação musical no palco da escola", en: "Students in musical performance on school stage" }
    },
    {
        id: "21",
        src: img21,
        category: "primary",
        title: { pt: "Hora do Conto", en: "Storytelling Hour" },
        description: { pt: "Incentivo à leitura e imaginação desde a infância.", en: "Encouraging reading and imagination from childhood." },
        alt: { pt: "Alunos do primário sentados em círculo para leitura", en: "Primary students sitting in a circle for storytelling" }
    },
    {
        id: "22",
        src: img22,
        category: "life",
        title: { pt: "Comunidade Escolar", en: "School Community" },
        description: { pt: "Integração entre escola, família e parceiros locais.", en: "Integration between school, family, and local partners." },
        alt: { pt: "Feira institucional com bancadas e visitantes", en: "Institutional fair with booths and visitors" }
    },
    {
        id: "23",
        src: img23,
        category: "science",
        title: { pt: "Rigor Laboratorial", en: "Laboratory Rigor" },
        description: { pt: "Preparação para certificações internacionais de ciências.", en: "Preparation for international science certifications." },
        alt: { pt: "Aluna do secundário manipulando provetas em laboratório", en: "Secondary student handling test tubes in lab" }
    },
    {
        id: "24",
        src: img24,
        category: "science",
        title: { pt: "Análise Científica", en: "Scientific Analysis" },
        description: { pt: "Foco e precisão na realização de estudos práticos.", en: "Focus and precision in conducting practical studies." },
        alt: { pt: "Aluna analisando dados científicos no laboratório", en: "Student analyzing scientific data in the lab" }
    },
    {
        id: "25",
        src: img25,
        category: "sports",
        title: { pt: "Treino e Disciplina", en: "Training & Discipline" },
        description: { pt: "Atividades físicas dinâmicas no campus escolar.", en: "Dynamic physical activities on the school campus." },
        alt: { pt: "Alunas em treino de educação física sob orientação", en: "Students in PE training under guidance" }
    }
];
