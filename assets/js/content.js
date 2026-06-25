window.siteContent = {
  "zh": {
    "meta": {
      "title": "HELIANTHUS",
      "description": "HELIANTHUS 的个人介绍页：数据工具、自动化应用、文档系统、可视化和个人项目。"
    },
    "nav": [
      {"href": "#oss", "text": "Open Source"},
      {"href": "#notes", "text": "Notes"},
      {"href": "#outcomes", "text": "Projects"},
      {"href": "#skills", "text": "Skills"},
      {"href": "#about", "text": "Experience"},
      {"href": "#contact", "text": "Contact"}
    ],
    "hero": {
      "eyebrow": "HELLO WORLD,",
      "title": "把数据作为方法。",
      "lead": "数据是我与世界交互的方法。先看见问题，再谈解法。",
      "actions": [
        {"href": "https://github.com/tshelianthus", "text": "GitHub", "primary": true},
        {"href": "mailto:t.s.helianthus@outlook.com", "text": "Email", "primary": false}
      ]
    },
    "about": {
      "eyebrow": "Experience",
      "title": "职业轨迹与演进",
      "lead": "在城市数据研究与应用领域深耕多年，经历从传播侧、研究侧到产品工程侧的演进，持续拓宽能力的边界。",
      "timeline": [
        {
          "year": "Phase 01",
          "role": "数据记者",
          "title": "数据新闻与传播",
          "desc": "用数据驱动与可视化向公众讲述城市故事，建立跨领域快速学习与深度研究能力。"
        },
        {
          "year": "Phase 02",
          "role": "数据分析师",
          "title": "专题数据研策",
          "desc": "构建城市指标体系，通过多源大数据分析为政府与头部企业提供战略投资决策支持。"
        },
        {
          "year": "Phase 03",
          "role": "数据产品经理 / 工程师",
          "title": "数据应用与产品",
          "desc": "主导城市级、商业级数据平台与 GIS 应用从零到一的数据解决方案设计、开发与落地。"
        }
      ]
    },
    "outcomes": {
      "eyebrow": "Projects",
      "title": "核心成果与实践",
      "lead": "基于多年实战，沉淀出在数据产品、商业研策和数据传播领域的核心业务成果。",
      "items": [
        {
          "meta": "Spatial BI / City Dashboard / GIS Architecture",
          "badge": "Engineering",
          "title": "空间智能与产品工程",
          "desc": "主导行业覆盖全国多城市的<strong>商业智能数据分析平台</strong>（商圈评价与品牌监测体系）及<strong>区域交通流控大屏</strong>等大型数据应用。负责从零到一的数据架构、主数据建模与生产实施，赋能大客流精细化管理与商业选址评估。"
        },
        {
          "meta": "Location Intelligence / Spatial Data Science / Grid Modeling",
          "badge": "Analytics",
          "title": "城市计算与商业决策",
          "desc": "擅长多源数据融合与城市空间精细化分析。独立撰写多篇商业化咨询报告，完整参与数十个大型项目。"
        },
        {
          "meta": "Data Storytelling / Urban Indexing / Consumer Insights",
          "badge": "Narrative",
          "title": "数据叙事与指数建模",
          "desc": "作为国内早期将大数据分析引入新闻报道的开拓性数据记者，以数据驱动与可视化交互方式产出多篇深度城市研究报道，视角广泛覆盖城市交通、人口迁移、产业格局与社交网络等核心课题。期间，围绕城市产业科创与创新关联网络的系列专题研究受到地方发改委高度重视，核心课题成果获收录为政策内参。"
        }
      ]
    },
    "skills": {
      "eyebrow": "Skills",
      "title": "技术栈与工具链",
      "lead": "喜欢用轻巧的工具链快速落地数据应用。将数据清洗、空间分析与地图建模串联，快速交付为简单直观的交互工具。",
      "items": [
        {"label": "Code", "value": "Vibe Coding / Python / TypeScript"},
        {"label": "Data", "value": "PostgreSQL / <a href=\"https://duckdb.org/\" target=\"_blank\" rel=\"noopener\">DuckDB</a> / <a href=\"https://dagster.io/\" target=\"_blank\" rel=\"noopener\">Dagster</a>"},
        {"label": "Spatial", "value": "PostGIS / <a href=\"https://www.mapbox.com/mapbox-gl-js\" target=\"_blank\" rel=\"noopener\">Mapbox GL</a> / QGIS / ArcGIS"},
        {"label": "Visual", "value": "<a href=\"https://www.metabase.com/\" target=\"_blank\" rel=\"noopener\">Metabase BI</a>"},
        {"label": "Build", "value": "<a href=\"https://nextjs.org/\" target=\"_blank\" rel=\"noopener\">Next.js</a> / <a href=\"https://supabase.com/\" target=\"_blank\" rel=\"noopener\">Supabase</a> / <a href=\"https://fastapi.tiangolo.com/\" target=\"_blank\" rel=\"noopener\">FastAPI</a> / <a href=\"https://streamlit.io/\" target=\"_blank\" rel=\"noopener\">Streamlit</a> / Docker"}
      ]
    },
    "oss": {
      "eyebrow": "Open Source",
      "title": "开源与效能工具",
      "lead": "在日常工作中，为了解决具体的效率和同步问题而开发的轻量级效能工具与开源项目。",
      "items": [
        {
          "name": "DuckFlow",
          "tech": "Python",
          "desc": "本地与云端对象存储的自动化数据流转工具，支持 S3 兼容端点与自定义文件监听。",
          "status": "WIP"
        },
        {
          "name": "text2data",
          "tech": "Python",
          "desc": "基于自然语言的轻量级数据库查询应用，自动将问题转化为 SQL 并即时返回结果。",
          "url": "https://github.com/tshelianthus/text2data"
        },
        {
          "name": "st-docs-render",
          "tech": "Python",
          "desc": "基于 Streamlit 的自动化文档生成与排版系统，通过样式和配置快速输出报告。",
          "status": "WIP"
        },
        {
          "name": "self-portrait-web",
          "tech": "System",
          "desc": "个人多维状态的数字化画像与建模框架，用于持续沉淀个人成长轨迹。",
          "status": "WIP"
        },
        {
          "name": "next-step",
          "tech": "TypeScript",
          "desc": "面向轻量工作流的任务组织与行动探索工具，专注于探索任务链路的动态构建。",
          "status": "WIP"
        }
      ]
    },
    "notes": {
      "eyebrow": "Writing",
      "title": "Notes",
      "lead": "记录观察、工具和判断过程。",
      "more": {"href": "https://wasteland.hashnode.dev/", "text": "查看全部 →"},
      "items": [
        {
          "tag": "Data / Benchmark",
          "date": "2026-04",
          "title": "DuckDB in the Wild: What 6 Minutes of Benchmarking Across 4 Machines Taught Me",
          "excerpt": "同一条查询，四台机器，不同存储。数字很混乱，比较也不公平——但出奇地有用。",
          "url": "https://wasteland.hashnode.dev/duckdb-in-the-wild-what-6-minutes-of-benchmarking-across-4-machines-taught-me-about-real-world-performance"
        },
        {
          "tag": "Engineering / Stack",
          "date": "2026-04",
          "title": "From Zero to One: How I Built a Lean Data Stack with Dagster, DuckDB, and S3",
          "excerpt": "一个人，从零搭出一套完整的轻量数据栈。关于工具选择与取舍的实战记录。",
          "url": "https://wasteland.hashnode.dev/from-zero-to-one-how-i-built-a-lean-data-stack-with-dagster-duckdb-and-s3-compatible-object-storage"
        },
        {
          "tag": "Tooling / BI",
          "date": "2025-01",
          "title": "DuckDB × Metabase × Object Storage",
          "excerpt": "用 Docker 把 DuckDB 接入 Metabase，直连 S3 数据，搭出一套极简 BI 环境。",
          "url": "https://wasteland.hashnode.dev/duckdbmetabase"
        }
      ]
    },
    "footer": {
      "eyebrow": "Contact",
      "title": "与我联系",
      "coords": "N31°13′50″ E121°28′14″",
      "links": [
        {"href": "mailto:t.s.helianthus@outlook.com", "text": "t.s.helianthus@outlook.com"},
        {"href": "https://tshelianthus.github.io/site/", "text": "tshelianthus.github.io/site"}
      ]
    }
  },
  "en": {
    "meta": {
      "title": "HELIANTHUS",
      "description": "HELIANTHUS Personal Profile: Data tools, automation apps, documentation systems, visualization, and personal projects."
    },
    "nav": [
      {"href": "#oss", "text": "Open Source"},
      {"href": "#notes", "text": "Notes"},
      {"href": "#outcomes", "text": "Projects"},
      {"href": "#skills", "text": "Skills"},
      {"href": "#about", "text": "Experience"},
      {"href": "#contact", "text": "Contact"}
    ],
    "hero": {
      "eyebrow": "HELLO WORLD,",
      "title": "Data as a Method.",
      "lead": "Data is the method through which I interact with the world. See the problem first. Talk solutions second.",
      "actions": [
        {"href": "https://github.com/tshelianthus", "text": "GitHub", "primary": true},
        {"href": "mailto:t.s.helianthus@outlook.com", "text": "Email", "primary": false}
      ]
    },
    "about": {
      "eyebrow": "Experience",
      "title": "Career Path & Evolution",
      "lead": "Deeply engaged in urban data research and application for years, evolving from the communication side to research and product engineering sides, continuously expanding my capabilities.",
      "timeline": [
        {
          "year": "Phase 01",
          "role": "Data Journalist",
          "title": "Data Journalism & Communication",
          "desc": "Told urban stories to the public through data-driven approaches and interactive visualizations, establishing cross-domain rapid learning and in-depth research capabilities."
        },
        {
          "year": "Phase 02",
          "role": "Data Analyst",
          "title": "Thematic Data Strategy & Research",
          "desc": "Built urban indicator systems and provided strategic investment decision support for governments and leading enterprises through multi-source big data analysis."
        },
        {
          "year": "Phase 03",
          "role": "Data Product Manager / Engineer",
          "title": "Data Applications & Products",
          "desc": "Led the design, development, and delivery of zero-to-one data solutions for city-level and commercial-grade data platforms and GIS applications."
        }
      ]
    },
    "outcomes": {
      "eyebrow": "Projects",
      "title": "Core Achievements & Practice",
      "lead": "Based on years of practical experience, consolidating core business achievements in data products, location intelligence, and data storytelling.",
      "items": [
        {
          "meta": "Spatial BI / City Dashboard / GIS Architecture",
          "badge": "Engineering",
          "title": "Spatial Intelligence & Product Engineering",
          "desc": "Led major data applications such as a <strong>Business Intelligence Data Analysis Platform</strong> (business district evaluation and brand monitoring system) covering multiple cities nationwide, and <strong>Regional Traffic Flow Control Dashboards</strong>. Responsible for zero-to-one data architecture, master data modeling, and production implementation, empowering refined management of large passenger flows and commercial site selection evaluation."
        },
        {
          "meta": "Location Intelligence / Spatial Data Science / Grid Modeling",
          "badge": "Analytics",
          "title": "Urban Computing & Business Decision-Making",
          "desc": "Skilled in multi-source data fusion and refined urban space analysis. Independently authored multiple commercial consulting reports and fully participated in dozens of large-scale projects."
        },
        {
          "meta": "Data Storytelling / Urban Indexing / Consumer Insights",
          "badge": "Narrative",
          "title": "Data Storytelling & Index Modeling",
          "desc": "As an pioneering data journalist who introduced big data analysis to news reporting in China, produced multiple in-depth urban research reports through data-driven and interactive visualization methods. Research topics widely covered urban transportation, population migration, industrial patterns, and social networks. During this period, a series of special studies on urban industrial technology innovation networks were highly valued by local development and reform commissions, with core project outcomes compiled into policy reference documents."
        }
      ]
    },
    "skills": {
      "eyebrow": "Skills",
      "title": "Tech Stack & Toolchain",
      "lead": "Passionate about rapidly building data applications using a lightweight toolchain. Connecting data cleaning, spatial analysis, and map modeling to quickly deliver simple and intuitive interactive tools.",
      "items": [
        {"label": "Code", "value": "Vibe Coding / Python / TypeScript"},
        {"label": "Data", "value": "PostgreSQL / <a href=\"https://duckdb.org/\" target=\"_blank\" rel=\"noopener\">DuckDB</a> / <a href=\"https://dagster.io/\" target=\"_blank\" rel=\"noopener\">Dagster</a>"},
        {"label": "Spatial", "value": "PostGIS / <a href=\"https://www.mapbox.com/mapbox-gl-js\" target=\"_blank\" rel=\"noopener\">Mapbox GL</a> / QGIS / ArcGIS"},
        {"label": "Visual", "value": "<a href=\"https://www.metabase.com/\" target=\"_blank\" rel=\"noopener\">Metabase BI</a>"},
        {"label": "Build", "value": "<a href=\"https://nextjs.org/\" target=\"_blank\" rel=\"noopener\">Next.js</a> / <a href=\"https://supabase.com/\" target=\"_blank\" rel=\"noopener\">Supabase</a> / <a href=\"https://fastapi.tiangolo.com/\" target=\"_blank\" rel=\"noopener\">FastAPI</a> / <a href=\"https://streamlit.io/\" target=\"_blank\" rel=\"noopener\">Streamlit</a> / Docker"}
      ]
    },
    "oss": {
      "eyebrow": "Open Source",
      "title": "Open Source & Productivity Tools",
      "lead": "Lightweight productivity tools and open-source projects developed to solve specific efficiency and synchronization issues in daily work.",
      "items": [
        {
          "name": "DuckFlow",
          "tech": "Python",
          "desc": "An automated data transfer tool between local and cloud object storage, supporting S3-compatible endpoints and custom file monitoring.",
          "status": "WIP"
        },
        {
          "name": "text2data",
          "tech": "Python",
          "desc": "A lightweight database query application based on natural language, automatically converting questions into SQL and returning results instantly.",
          "url": "https://github.com/tshelianthus/text2data"
        },
        {
          "name": "st-docs-render",
          "tech": "Python",
          "desc": "Streamlit-based automated document generation and layout system, quickly outputting reports via styling and configuration.",
          "status": "WIP"
        },
        {
          "name": "self-portrait-web",
          "tech": "System",
          "desc": "A digital profiling and modeling framework for personal multi-dimensional states, used to continuously capture personal growth trajectories.",
          "status": "WIP"
        },
        {
          "name": "next-step",
          "tech": "TypeScript",
          "desc": "A task organization and action exploration tool designed for lightweight workflows, focusing on dynamic construction of task chains.",
          "status": "WIP"
        }
      ]
    },
    "notes": {
      "eyebrow": "Writing",
      "title": "Notes",
      "lead": "Recording observations, tools, and the decision process.",
      "more": {"href": "https://wasteland.hashnode.dev/", "text": "View all →"},
      "items": [
        {
          "tag": "Data / Benchmark",
          "date": "2026-04",
          "title": "DuckDB in the Wild: What 6 Minutes of Benchmarking Across 4 Machines Taught Me",
          "excerpt": "Same query, four machines, different storage. The numbers are messy, the comparisons unfair — and yet surprisingly useful.",
          "url": "https://wasteland.hashnode.dev/duckdb-in-the-wild-what-6-minutes-of-benchmarking-across-4-machines-taught-me-about-real-world-performance"
        },
        {
          "tag": "Engineering / Stack",
          "date": "2026-04",
          "title": "From Zero to One: How I Built a Lean Data Stack with Dagster, DuckDB, and S3",
          "excerpt": "One person. One lean stack. A practical record of tool choices, trade-offs, and what actually shipped.",
          "url": "https://wasteland.hashnode.dev/from-zero-to-one-how-i-built-a-lean-data-stack-with-dagster-duckdb-and-s3-compatible-object-storage"
        },
        {
          "tag": "Tooling / BI",
          "date": "2025-01",
          "title": "DuckDB × Metabase × Object Storage",
          "excerpt": "Connecting DuckDB to Metabase via Docker, querying S3 directly — a minimal BI setup that just works.",
          "url": "https://wasteland.hashnode.dev/duckdbmetabase"
        }
      ]
    },
    "footer": {
      "eyebrow": "Contact",
      "title": "Get in Touch",
      "coords": "N31°13′50″ E121°28′14″",
      "links": [
        {"href": "mailto:t.s.helianthus@outlook.com", "text": "t.s.helianthus@outlook.com"},
        {"href": "https://tshelianthus.github.io/site/", "text": "tshelianthus.github.io/site"}
      ]
    }
  }
};
