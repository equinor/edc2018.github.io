const CATEGORIES = {
  KEYNOTE: 'Keynote',
  LANGUAGE: 'Language',
  MINIWORKSHOP: 'Miniworkshop',
  WORKSHOP: 'Workshop',
  CONTRIBUTED_LECTURE: 'Contributed lecture',
};

const HEADINGS = {
  KEYNOTE: 'Keynote',
  LANGUAGES: 'Languages',
  MINIWORKSHOPS: 'Miniworkshops',
  WORKSHOPS: 'Workshops',
  CONTRIBUTED_LECTURE: 'Contributed lecture',
};

const SPEAKERS = {
  SIMON_BROWN: 'Simon Brown',
  JORN_OLMHEIM: 'Jørn Ølmheim',
  JORGEN_KVALSVIK: 'Jørgen Kvalsvik',
  ERIK_PARMANN: 'Erik Parmann',
  MARKUS_FANEBUST_DREGI: 'Markus Fanebust Dregi',
  CARSTEN_FALK_HAMMERSHOJ: 'Carsten Falk Hammershøj',
  KRISTIAN_FLIKKA_AND_EIVIND_SJAASTAD: 'Kristian Flikka and Eivind Sjaastad',
  OYVIND_RONNE: 'Øyvind Rønne',
  TAHIR_ALI: 'Tahir Ali',
  JON_JAATUN: 'Jon Jaatun',
  OLVE_MAUDAL: 'Olve Maudal',
  SEBASTIAN_ROLL: 'Sebastian Roll',
  JENS_G_MAGNUS: 'Jens G. Magnus',
  AUSTIN_BINGHAM: 'Austin Bingham',
  KRISTIN_WULFF: 'Kristin Wulff',
  LARS_KARE_SKJORESTED: 'Lars Kåre Skjørestad',
  KNUT_KVARME_AND_KASIA_WDANIEC: 'Knut Kvarme and Kasia Wdaniec',
};

const TIME_SLOTS = {
  '09:00': '09:00',
  '10:15': '10:15',
  '12:15': '12:15',
  '13:00': '13:00',
  '14:15': '14:15',
  '15:00': '15:00',
  '17:30': '17:30',
  '19:00': '19:00',
  '21:00': '21:00',
};

const DAYS = {
  '2018-09-25': '2018-09-25',
  '2018-09-26': '2018-09-26',
  '2018-09-27': '2018-09-27',
};

const CONFERENCE_DAYS = {
  DAY_1: 'Day 1',
  DAY_2: 'Day 2',
  DAY_3: 'Day 3',
};

const CALENDAR_DATE = {
  TUESDAY: 'Tuesday September 25',
  WEDNESDAY: 'Wednesday September 26',
  THURSDAY: 'Thursday September 27',
};

const COLORS = {
  LIGHT_YELLOW: '#fff5cb',
};

const IDS = {
  KEYNOTE_SOFTWARE_ACRHITECTURE: 'keynote_software_architecture',
  ELIXIR: 'elixir',
  HASKELL: 'haskell',
  LISP: 'lisp',
  BRAINFUCK: 'brainfuck',
  PRINTING_3D: 'printing_3D',
  C4: 'c4',
  MODEL_CODE_GAP: 'model_code_gap',
  MACHINE_LEARNING: 'machine_learning',
  API_WORKSHOP: 'api_workshop',
  OMNIA: 'omnia',
  DESIGN_THINKING: 'design_thinking',
  KEYNOTE_FEEDBACK_DRIVEN_DEVELOPMENT: 'keynote_feedback_driven_development',
  MICRO_PYTHON: 'micro_python',
  UNREAL_ENGINE: 'unreal_engine',
  INTERMEDIATE_PYTHON: 'intermediate_python',
  C_PLUS_PLUS: 'c_plus_plus',
  DESIGN_SPRINT: 'design_sprint',
  RADIX: 'radix',
  AGILE: 'agile',
  HACKATHON: 'hackathon',
};

export const events = [
  {
    id: IDS.KEYNOTE_SOFTWARE_ACRHITECTURE,
    title:
      'Five things every developer should know about software architecture',
    speaker: SPEAKERS.SIMON_BROWN,
    description:
      'The software development industry has made huge leaps in recent years; with agile, lean, software craftsmanship, evolutionary design and microservices being just a few of the buzzwords we throw around. Despite this, software development teams are often more chaotic than they are self-organising, with the resulting code being more of a mess than was perhaps anticipated. Successful software projects aren’t just about good code though, and sometimes you need to step away from the IDE for a few moments to see the bigger picture.\nThis session is about that bigger picture and is aimed at software developers who want to learn more about software architecture, technical leadership and the balance with agility. This talk will debunk some of the common myths as we look at five things every developer should know about software architecture; a guide to software architecture on modern software projects that’s pragmatic rather than academic and lightweight rather than “enterprisey”.',
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },
  {
    id: IDS.ELIXIR,
    title: 'Introduction to Elixir',
    shortTitle: 'Elixir',
    speaker: SPEAKERS.JORN_OLMHEIM,
    description:
      'Elixir is a dynamic, functional language designed for building scalable and maintainable applications. Elixir leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems, while also being successfully used in web development and the embedded software domain.\nThis talk will give an introduction to the language, the interactive execution environment, as well as the scripting and applications modes that Elixir can be used in. This will be an introduction and is intended for beginners, thus no prior knowledge of Elixir or functional programming is required.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.HASKELL,
    title: 'Crowdsourced Haskell',
    shortTitle: 'Haskell',
    speaker: SPEAKERS.JORGEN_KVALSVIK,
    description:
      'Welcome to a hands-on session where we will crowdsource programs solving real problems in Haskell, a wonderful non-strict purely functional programming language. Both Haskell and mob programming is a great way to apply yourself, and to pick up a few refreshing ideas on computation and programs on the way.\nIt will be an interactive session where we together solve problems and write programs, through discussions and suggestions from the participants.\nBringing a laptop is optional (all programs will be compiled and run on the instructor’s computer), but you’re free to bring your own computer to try out snippets and programs yourself.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.LISP,
    title: 'Schemy listy lispy lisps',
    shortTitle: 'Lisp',
    speaker: SPEAKERS.ERIK_PARMANN,
    description:
      'We will look into Lisp in several of its beautiful variants. After this little crash course you should be able to uphold polite smalltalk about some of the different lisps, a bit of their history, and how to program in them. You will be able to make snarky remarks to Pythonists about their lack of macros and how Python is actually just a poor man’s Lisp without homoiconicity, and you will learn what that word means.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.BRAINFUCK,
    title: 'Minimalistic languages and their implications',
    shortTitle: 'Brainfuck',
    speaker: SPEAKERS.MARKUS_FANEBUST_DREGI,
    description:
      'We will start this session by giving an introduction to the extremely small language Brainfuck. We will then discuss the technical implications of Brainfuck being Turing complete, as well as ponder over its connection to life, Game of Life, amoebas and emerging intelligence (artifical or not).\nTo finish off with something concrete we will pair program Brainfuck. If you bring your best and work hard, you might be able to add two integers by the end of the session (no kidding).\nBringing a laptop is beneficial. But to be honest, development time will be king. So you will not lose that much time by emulating on paper.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.C4,
    title: 'Visualising software architecture with the C4 model',
    shortTitle: 'Visualising software architecture',
    speaker: SPEAKERS.SIMON_BROWN,
    description:
      'It’s very likely that the majority of the software architecture diagrams you’ve seen are a confused mess of boxes and lines. Following the publication of the Manifesto for Agile Software Development in 2001, teams have abandoned UML, discarded the concept of modelling and instead place a heavy reliance on conversations centered around incoherent whiteboard diagrams or shallow “Marketecture” diagrams created with Visio. Moving fast and being agile requires good communication, yet software development teams struggle with this fun- damental skill. A good set of software architecture diagrams are priceless for aligning a team around a shared vision and for getting new-joiners productive fast.\nThis session explores the visual communication of software architecture and is based upon a decade of my experiences working with software development teams large and small across the globe. We’ll look at what is commonplace today, the importance of creating a shared vocabulary, diagram notation, and the value of creating a lightweight model to describe your software system using the ”C4 model”, which I created as a way to help software development teams describe and communicate software architecture, both during up - front design sessions and when retrospectively documenting an existing codebase.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.LANGUAGE,
  },
  {
    id: IDS.PRINTING_3D,
    title: '3D printing — a practical guide to getting started',
    shortTitle: '3D printing',
    speaker: SPEAKERS.CARSTEN_FALK_HAMMERSHOJ,
    description:
      'What is 3D printing and where do you start?\nWhich desktop printers exist and what do you need to consider before you purchase one? What materials are needed for printing. Which maker communities for 3D printing are there? What are the opportunities for Equinor?\nHow do we design for 3D printing ? We will see tools and do a practical exercise.',
    timeSlots: [
      {
        time: TIME_SLOTS['15:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    day: DAYS['2018-09-25'],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.MODEL_CODE_GAP,
    title: 'The model-code gap and Visualising software architecture',
    shortTitle: 'The model-code gap\nVisualising software architecture',
    speaker: SPEAKERS.SIMON_BROWN,
    description:
      'The model-code gap\n\nWhen we’re having an architecture discussion, we’ll talk about abstractions, using terms like component, module and layer. These abstractions reflect our mental model of a software system, which are useful when describing our architectural ideas and intent. These same abstractions don’t typically exist in the programming languages we use though. There’s no layer keyword in Java, for example. To implement these abstractions, we need to use a combination of the constructs available in our programming languages; such as classes, interfaces, objects, functions, packages, namespaces, files and folders. In many cases, the code that is written doesn’t end up reflecting the model. This is the model-code gap.\nThe model - code gap manifests itself in a number of ways. In obvious cases, the code doesn’t match the architecture diagrams.Sometimes the problems are more subtle though. This session is about the model-code gap, and particularly how it relates to applications that are built from a single monolithic deployment unit.Regardless of how we choose to structure our code(layers, vertical slices, ports and adapters, etc), our best design intentions can be destroyed in a flash if we don’t consider the intricacies of the implementation strategy. The devil is in the implementation details.\n\n\nVisualising software architecture\n\nIt’s very likely that the majority of the software architecture diagrams you’ve seen are a confused mess of boxes and lines. Following the publication of the Manifesto for Agile Software Development in 2001, teams have abandoned UML, discarded the concept of modelling and instead place a heavy reliance on conversations centered around incoherent whiteboard diagrams or shallow “Marketecture” diagrams created with Visio. Moving fast and being agile requires good communication, yet software development teams struggle with this fun- damental skill. A good set of software architecture diagrams are priceless for aligning a team around a shared vision and for getting new-joiners productive fast.\nThis session explores the visual communication of software architecture and is based upon a decade of my experiences working with software development teams large and small across the globe. We’ll look at what is commonplace today, the importance of creating a shared vocabulary, diagram notation, and the value of creating a lightweight model to describe your software system using the ”C4 model”, which I created as a way to help software development teams describe and communicate software architecture, both during up - front design sessions and when retrospectively documenting an existing codebase.',
    timeSlots: [
      {
        time: TIME_SLOTS['15:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.MACHINE_LEARNING,
    title: 'Introduction to machine learning',
    shortTitle: 'Machine learning basics',
    speaker: SPEAKERS.KRISTIAN_FLIKKA_AND_EIVIND_SJAASTAD,
    description:
      '\n• A very basic introduction to machine learning.\n• What is it?\n• Why do we do it?\n• How do we do it (in Python)?\nThere will be some examples shown, we recommend (but don’t require) that you bring your computer with Python installed, so that you can try some things out for yourself.',
    timeSlots: [
      {
        time: TIME_SLOTS['15:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.API_WORKSHOP,
    title: 'API workshop',
    shortTitle: 'API workshop',
    speaker: SPEAKERS.OYVIND_RONNE,
    description:
      'In this hands-on session we will create a simple REST API using JavaScript and Node.js and deploy it to Azure / OMNIA.\n' +
      'We will look into creating an API specification using Swagger / OpenAPI Specification.\n' +
      'If we have time, we will also try setting it up in Azure API management. \n' +
      'There will not be many slides, mostly we will code and have fun!\n' +
      '\n' +
      'Please make sure Node.js and Postman is installed on your computer beforehand, and that you are able to turn off any proxy settings you normally need within the Equinor network.',
    timeSlots: [
      {
        time: TIME_SLOTS['15:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.OMNIA,
    title: 'Data enginering in Omnia',
    speaker: SPEAKERS.TAHIR_ALI,
    description:
      'The amount of data collected and analyzed has increased rapidly, which has led to an increase in the demand for skills and tools in data processing. With the growth of both the number and size of big data teams, specialized roles begin to be defined. One of these roles is data engineer, which focuses on ensuring that quality data is available for data scientists and analysts to analyze.\nThis talk will give you an introduction to;\n• Data Engineering\n• Data engineering project(s)\n• How we do data engineering in Equinor\n• A demo of Azure Data factory V2',
    timeSlots: [
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.CONTRIBUTED_LECTURE,
  },
  {
    id: IDS.DESIGN_THINKING,
    title: 'Design thinking',
    speaker: SPEAKERS.JON_JAATUN,
    description:
      'What is Design Thinking?\nJon, from the mobility team, gives us a fun introduction to Design Thinking. With practical examples, first one that you can experience yourself in Lego, and later from him and his team’s work for the field of the future.',
    timeSlots: [
      {
        time: TIME_SLOTS['15:00'],
        day: CONFERENCE_DAYS.DAY_1,
        date: CALENDAR_DATE.TUESDAY,
      },
    ],
    category: CATEGORIES.MINIWORKSHOP,
  },
  {
    id: IDS.KEYNOTE_FEEDBACK_DRIVEN_DEVELOPMENT,
    title: 'Feedback driven development',
    speaker: SPEAKERS.OLVE_MAUDAL,
    description:
      'For any non-trivial project: Software development should be considered a continuous learning process and a cooperative game of communication between professionals. Effective software development can be achieved through fre- quently repeating cycles of preparing, changing, observing, reflecting, and learning.\nWhile the statement above is obvious to many, it is easy to miss the key points.For instance, you must make sure that you facilitate the learning process by implementing effective feedback mechanisms, do frequent iterations and be willing to re - plan the project continuously.You must also implement information radiators, enable osmotic communication, and get rid of things that hinders communication (yes, I am a fan of Alistair Cockburn). But first of all, you must assume that your developers are professionals that know what to do given a vision, trust and enough information. You should certainly not treat your developers as mere resources that need to be directed and told what to do and how to do it.',
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.KEYNOTE,
  },
  {
    id: IDS.MICRO_PYTHON,
    title: 'MicroPython',
    shortTitle: 'μPython',
    speaker: SPEAKERS.SEBASTIAN_ROLL,
    color: '#844D9E',
    description:
      'MicroPython is a Python implementation for embedded processors. This two day workshop will cover the MicroPython language and how to use it for your very own IoT project. Each participant will be provided with a powerful ESP32 microcontroller and a wide range of fun components to use. Cooperation is encouraged!\nSome examples of what we might create together:\n• mp3 player \n• remote controlled car \n• gamepad \n• NFC tag reader \n• handheld web server \n• MQTT-connected sensor\nFrom the experienced to the aspiring, this workshop should suit everyone. Please bring your laptop.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.UNREAL_ENGINE,
    title: 'Unreal Engine',
    subtitle: 'Let’s make games with Unreal Engine!',
    speaker: SPEAKERS.JENS_G_MAGNUS,
    color: '#f58db6',
    description:
      'This workshop is a combination of a tutorial and hackathon. We will go over everything you need to make simple games.\nThis includes\n• The Unreal Engine Editor \n• Programming in Blueprint(Unreal’s visual programming language) \n• Important gameplay classes \n• Materials During the tutorial section of the workshop we will learn by introducing new gameplay elements to template games provided by the engine. When we’re done with that it’s time to get creative!We will use what we’re learned to create our own games.\nUnreal Engine 4 is a powerful tool. The engine can be modified, extended and scripted with C++; something we might touch upon if there is time. It supports VR / AR with all mainstream hardware.\nWorkshop requirements:\n• Somewhat beefy computer, the editor is heavy (but the standard laptop works) \n• UnrealEnginelicense, it’s free, you just need to register at https://www.unrealengine.com \n• Preferably with the Unreal Engine installed\n\t– Do this before the workshop as the installation is at minimum 7GB \n\t– If you run Linux, you need to build the engine from source, this requires a newer version of make, clang, and mono.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.INTERMEDIATE_PYTHON,
    title: 'Intermediate Python',
    speaker: SPEAKERS.AUSTIN_BINGHAM,
    company: 'Sixty North v/ Austin Bingham',
    color: '#367ABD',
    description:
      'This two day course is designed for developers who already know the funda- mentals of Python. This course will get more ”under the hood” and introduce the students to powerful tools and techniques that go beyond the basics. There are a lot of intermediate topics in Python, and this course can be customized based on need. The class will focus on Python 3 unless Python 2 is specifically requested. \n• We start immediately with working programs. \n• Testing is integral to our approach. \n• Taught on Windows, Linux or Mac OS X. \n• Knowledge level of Python for Programmers course is assumed\nTopics \n• Function and class decorators \n• Closures \n• Creating context managers \n• Packaging and distribution of Python packages \n• Callable objects, lambdas, and extended argument syntax \n• Properties, class methods, and static methods \n• String representations of objects \n• Specialized numeric and scalar types \n• Functional-style programming tools \n• The iteration and iterable protocols \n• Multiple inheritance, method resolution order, and super() \n• Collection protocols and implementing collections \n• Advanced error handling with exceptions \n• Introspection\nComputer Setup:\nThis workshop requires that you bring a laptop with the following software installed: \n• Python 3.3 or greater installed. \n• An editor for Python code.Attendees can use whatever editor they prefer, but we recommend PyCharm which is a full - featured Python IDE \n• The ability to either connect to the Internet or accept USB flash drives so we can distribute course materials on the day.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.C_PLUS_PLUS,
    title: 'A Tour of Modern C++',
    speaker: SPEAKERS.OLVE_MAUDAL,
    color: '#03D1AB',
    description:
      'In this fast-paced course we will start from scratch and relearn C++ with modern syntax and semantics.\nAmong other things you will learn(at least something) about:\n• rvalues and move semantics \n• how to write and understand templates \n• function objects and lambda expressions \n• decltype, auto and type deduction in general \n• exception handling and exception safety \n• ”mystical” stuff like ADL, RAII and SFINAE \n• futures, promises and higher-order parallelism \n• concepts and type traits \n• iterators, smart pointers and object lifetimes \n• using the standard library effectively \n• misc do’s and don’ts in modern C++ \n• modern design principles and how to write solid code \n• C++11, C++14 and new stuff coming with C++17 and later\nThis course is aimed at experienced programmers that would like to learn how to write, or at least understand, modern C++.Ideally you should have some experience with either C, old-school C++, Python and / or Java.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.DESIGN_SPRINT,
    title: 'Google Design Sprint',
    speaker: SPEAKERS.KRISTIN_WULFF,
    company: 'Kantega v/ Kristin Wulff',
    color: '#EB7B2D',
    description:
      'Get to know a practical, and time boxed implementation of Design Thinking from Google Ventures. The methodical five days approach, forces the team to explore a vast space of ideas, and assist you in quickly narrowing them down to the one you really want to test on your users. An agile approach to the design phase, that allows your team to fail fast and shortcuts the idea→learning feedback loop. Do you think we could be more curious and creative in the earlier stages of our projects. Do you think that our projects are agile in name, but not always in practice. Or have you at some point simply experienced that the code you were writing, was an excellent answer, but sadly for the wrong question. Then join in for 2×three hours of fun, a new perspective on the design phase, and a pocket full of ideation activities and practices for you and your team.\nPrimarily for: Everyone\nParticipant requirements: Their head and hands.',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.RADIX,
    title: 'Getting a feel for Radix',
    shortTitle: 'Radix',
    speaker: SPEAKERS.LARS_KARE_SKJORESTED,
    color: '#EE4035',
    description:
      'The vision/purpose for Omnia Radix is Happy and efficient Software Developers. We want to provide a basic modern cloud native software engineering capability for small teams. Keywords are iterative development, automation CI/CD and monitoring.\nIn this workshop we will build a simple web app using a basic software devel- opment workflow (code, version control, build, test), move the app to Docker containers and eventually deploy the app to the Radix platform.\nThe Radix platform that we will use is very early alpha stage - so expect some manual hurdles. When finished you should have an idea about how a cloud native software development workflow could look like - and what role Radix could play for your team.\nIn the workshop, you can use any programming language that you want to as long as it’s able to run in a Docker container on a Linux architecture. Our example app will be written in Node.JS. If you prefer to follow this “track” - please make sure that Node.JS is installed and running ok - prior to the workshop.\nPre-requisites\nYour own precious developer laptop with\n• Installed and working “programming echo system” of your choice (Node, Python, C#...)\n• Docker installed and working\n• Having a working account on github.com.\n• Git installed and working locally',
    timeSlots: [
      {
        time: TIME_SLOTS['10:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.AGILE,
    title: 'Agile Workshop',
    shortTitle: 'Agile Workshop',
    speaker: SPEAKERS.KNUT_KVARME_AND_KASIA_WDANIEC,
    color: '#EE4035',
    description:
      '4 Themes of Agile:\n\nCreating Better Leaders\nGain knowledge and support in transforming an organisation\'s culture to one of autonomy, self-organisation, and continuous improvement.The goal is to continually rise above the competition while attracting and retaining top talent.\n\nCreating Better Product Owners\nBecome a "product leader" in your business, through learning tools such as product strategy and road-mapping, while using Scrum to maximise your team\'s potential to create iterative, incremental, and innovative products.\n\nCreating Better ScrumMasters\nLearn new skills and techniques that help you become more effective change agent, and validate your role of ScrumMaster in your world of work.\n\nCreating Better Teams\nDevelop skills so each of your team members is able to take ownership of the opportunity to self-organise, as the Scrum framework suggests. Learn how to manage and get the most out of yourself, your Product Owner, and ScrumMaster.\n\nDetailed schedule will be shared on the day.',
    timeSlots: [
      {
        time: TIME_SLOTS['14:15'],
        day: CONFERENCE_DAYS.DAY_2,
        date: CALENDAR_DATE.WEDNESDAY,
      },
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
  {
    id: IDS.HACKATHON,
    title: 'Hackathon',
    description:
      'Do you have an idea?  Try it out here, either on your own, or with other curious playgrounders.  Mistakes are made to be made; this is the time and place for trying and working on, both good and bad ideas.\nThe C++ slot and the design sprint slot end on day 2, so this slot is especially suited for C++-innovation collaboration.',
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        day: CONFERENCE_DAYS.DAY_3,
        date: CALENDAR_DATE.THURSDAY,
      },
    ],
    category: CATEGORIES.WORKSHOP,
  },
];

const getLecture = id => events.find(lecture => lecture.id === id);

export const schedule = [
  {
    conferenceDay: CONFERENCE_DAYS.DAY_1,
    calendarDate: CALENDAR_DATE.TUESDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_SOFTWARE_ACRHITECTURE)],
      },
      {
        time: TIME_SLOTS['10:15'],
        heading: HEADINGS.LANGUAGES,
        events: [
          getLecture(IDS.BRAINFUCK),
          getLecture(IDS.LISP),
          getLecture(IDS.ELIXIR),
          getLecture(IDS.HASKELL),
          getLecture(IDS.C4),
        ],
      },
      {
        time: TIME_SLOTS['12:15'],
        events: [{ title: 'Developer Survey QA' }],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['14:15'],
        heading: HEADINGS.CONTRIBUTED_LECTURE,
        events: [getLecture(IDS.OMNIA)],
      },
      {
        time: TIME_SLOTS['15:00'],
        heading: HEADINGS.MINIWORKSHOPS,
        events: [
          getLecture(IDS.MACHINE_LEARNING),
          getLecture(IDS.PRINTING_3D),
          getLecture(IDS.API_WORKSHOP),
          getLecture(IDS.DESIGN_THINKING),
          getLecture(IDS.MODEL_CODE_GAP),
        ],
      },
      {
        time: TIME_SLOTS['17:30'],
        events: [{ title: 'Leisure and activities' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [
          {
            title: 'Dinner and quiz, delicious tapas and drinks',
          },
        ],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['21:00'],
        events: [{ title: 'Meet your colleagues' }],
      },
    ],
  },
  {
    conferenceDay: CONFERENCE_DAYS.DAY_2,
    calendarDate: CALENDAR_DATE.WEDNESDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        heading: HEADINGS.KEYNOTE,
        events: [getLecture(IDS.KEYNOTE_FEEDBACK_DRIVEN_DEVELOPMENT)],
      },
      {
        time: TIME_SLOTS['10:15'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MICRO_PYTHON), part: '1 of 3' },
          { ...getLecture(IDS.UNREAL_ENGINE), part: '1 of 3' },
          { ...getLecture(IDS.INTERMEDIATE_PYTHON), part: '1 of 3' },
          { ...getLecture(IDS.RADIX), part: '1 of 1' },
          { ...getLecture(IDS.C_PLUS_PLUS), part: '1 of 2' },
          { ...getLecture(IDS.DESIGN_SPRINT), part: '1 of 2' },
        ],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['14:15'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MICRO_PYTHON), part: '2 of 3' },
          { ...getLecture(IDS.UNREAL_ENGINE), part: '2 of 3' },
          { ...getLecture(IDS.INTERMEDIATE_PYTHON), part: '2 of 3' },
          { ...getLecture(IDS.AGILE), part: '1 of 2' },
          { ...getLecture(IDS.C_PLUS_PLUS), part: '2 of 2' },
          { ...getLecture(IDS.DESIGN_SPRINT), part: '2 of 2' },
        ],
      },
      {
        time: TIME_SLOTS['17:30'],
        events: [{ title: 'Leisure and activities' }],
      },
      {
        time: TIME_SLOTS['19:00'],
        events: [{ title: 'Dinner' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['21:00'],
        events: [{ title: 'Meet your colleagues' }],
      },
    ],
  },
  {
    conferenceDay: CONFERENCE_DAYS.DAY_3,
    calendarDate: CALENDAR_DATE.THURSDAY,
    timeSlots: [
      {
        time: TIME_SLOTS['09:00'],
        heading: HEADINGS.WORKSHOPS,
        events: [
          { ...getLecture(IDS.MICRO_PYTHON), part: '3 of 3' },
          { ...getLecture(IDS.UNREAL_ENGINE), part: '3 of 3' },
          { ...getLecture(IDS.INTERMEDIATE_PYTHON), part: '3 of 3' },
          { ...getLecture(IDS.AGILE), part: '2 of 2' },
          { ...getLecture(IDS.HACKATHON), part: '1 of 1', color: '#03D1AB' },
          { ...getLecture(IDS.HACKATHON), part: '1 of 1', color: '#EB7B2D' },
        ],
      },
      {
        time: TIME_SLOTS['12:15'],
        events: [
          {
            title: 'DCOE and CIT QA',
            speaker: 'Moderated by Kristian Flikka',
          },
        ],
      },
      {
        time: TIME_SLOTS['13:00'],
        events: [{ title: 'Lunch' }],
        background: COLORS.LIGHT_YELLOW,
      },
      {
        time: TIME_SLOTS['14:15'],
        events: [{ title: 'Summary', color: '#ec384a' }],
      },
      {
        time: TIME_SLOTS['15:00'],
        events: [{ title: 'EOC' }],
      },
    ],
  },
];
