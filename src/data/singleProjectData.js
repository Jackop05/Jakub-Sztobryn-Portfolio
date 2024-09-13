const singleProjectData = {
    'javascript': [
        {
            param: 'allegro-clone',
            name: 'Allegro Clone',
            upperTitle: 'Allegro Clone is a Real-World Project',
            text1: [
                'Allegro Clone replicates the well-known Allegro website.',
                'Designed for users to swiftly and effortlessly purchase items.',
                'Features include adding items to the cart, adjusting quantities before purchase, searching within specific categories, keyword-based searches, and checking stock availability.',
                'All these functionalities are integrated into Allegro Clone.'
            ],
            text2: [
                'Utilizes standard web development technologies.',
                'Incorporates MongoDB with Mongoose for database management, Tailwind for styling, Vite with React.js for client-side rendering, Node.js for server-side operations, bcrypt for password encryption, and more...'
            ],
            project: [
                {
                    image: '/images/allegro/main.png',
                    title: 'Allegro Clone',
                    description: 'The main page of Allegro Clone features a fully responsive and user-friendly interface, built with React, offering smooth navigation through various product categories.'
                },
                {
                    image: '/images/allegro/login.png',
                    title: 'Allegro Clone',
                    description: 'The login page ensures secure user authentication with JWT tokens and bcrypt for password hashing, allowing users to create accounts and log in safely.'
                },
                {
                    image: '/images/allegro/cart.png',
                    title: 'Allegro Clone',
                    description: 'The shopping cart system allows users to add and manage products with real-time updates to the cart\'s total value, demonstrating efficient state management in React.'
                },
                {
                    image: '/images/allegro/liked.png',
                    title: 'Allegro Clone',
                    description: 'The liked items feature lets users mark their favorite products, storing this data in the MongoDB database and displaying it in a personalized favorites section.'
                },
                {
                    image: '/images/allegro/item.png',
                    title: 'Allegro Clone',
                    description: 'The individual item page presents detailed product information, including image, descriptions, pricing, enhancing the user\'s shopping experience with dynamic content loading.'
                },
            ],
            color: 'orange-600', 
            rgbColor: 'rgb(234, 88, 12)', 
            link: 'https://github.com/Jackop05/Allegro-clone',
        },
        {
            param: 'korepetycje-online',
            name: 'Korepetycje Online',
            upperTitle: 'Learn Math and Physics Online with Expert Tutors',
            text1: [
                'Korepetycje Online is a comprehensive educational platform for students seeking improvement in math and physics.',
                'Whether preparing for exams, tackling homework, or enhancing grades, the platform connects students with experienced tutors for success.'
            ],
            text2: [
                'Developed with modern web technologies like React, Node.js, and Tailwind CSS, Korepetycje Online offers a smooth and engaging learning experience.', 
                'Students can book lessons, manage schedules, and interact with tutors in real time through a user-friendly interface.'
            ],
            project: [
                {
                    image: '/images/korepetycje/main.png',
                    title: 'Main Dashboard',
                    description: 'The main dashboard provides students with easy access to courses, schedules, and contact info, featuring a clean and intuitive layout for quick lesson booking.'
                },
                {
                    image: '/images/korepetycje/lesson.png',
                    title: 'Lesson Booking Page',
                    description: 'Browse subjects, view tutor availability, and book lessons at convenient times. It takes only few clicks for user and the data is send to the database.',
                },
                {
                    image: '/images/korepetycje/myLessons.png',
                    title: 'My Lessons Page',
                    description: 'Manage upcoming and past lessons with details on timing, subjects, each course has all the information user needs and provide a link to the meeting. '
                },
                {
                    image: '/images/korepetycje/register.png',
                    title: 'Registration Page',
                    description: 'Designed for simplicity and security, allowing new users to create accounts and book lessons quickly. Icons and text are designed to make navigating through website hassle-free experience.'
                }
            ],
            color: 'green-500',
            rgbColor: 'rgb(34, 197, 94)', 
            link: 'https://github.com/Jackop05/Korepetycje-Online'
        },
        {
            param: 'messenger-clone',
            name: 'Messenger Clone',
            upperTitle: 'Chat with Your Friends Seamlessly',
            text1: [
                'Messenger is a widely used chat application.',
                'It allows users to stay connected through messages, photos, and video calls.',
                'My clone replicates core functionalities while introducing new features to enhance the chat experience.'
            ],
            text2: [
                'Developed with modern frameworks for a smooth user experience.',
                'Designed with scalability and security in mind, showcasing the potential of current web technologies.',
                'Optimized for both mobile and desktop platforms, ensuring seamless communication across devices.'
            ],
            project: [
                {
                    image: '/images/messenger/chats.png',
                    title: 'Chats Overview',
                    description: 'Manage recent conversations in an intuitive chat interface, offering quick access to active chats and new conversations.'
                },
                {
                    image: '/images/messenger/login.png',
                    title: 'Login Screen',
                    description: 'Simple and secure login process with clear instructions, fast managing in database.'
                },
                {
                    image: '/images/messenger/settingsChat.png',
                    title: 'Chat Settings',
                    description: 'Customize chat settings for a personalized experience. Set nickname, configure quick emoji, and see their profile on facebook.'
                },
                {
                    image: '/images/messenger/chat.png',
                    title: 'Chat Interface',
                    description: 'Engage in real-time conversations with rich text support and emojis. The user-friendly interface ensures a fluid chatting in both two-people and group convarsations.'
                },
            ],
            color: 'blue-500',
            rgbColor: 'rgb(59, 130, 246)',
            link: 'https://github.com/Jackop05/Messenger_clone',
        },
        {
            param: 'maze-game',
            name: 'Maze Game',
            upperTitle: 'Find the Shortest Path to Exit',
            text1: [
                'Maze Game is an engaging puzzle where players set a labyrinth to find the shortest path using the Breadth-First Search (BFS) algorithm.',
                'The game offers a dynamic experience with customizable maze sizes, intuitive controls like clicking or holding mouse to draw the labytrinth', 
                'Introducing players to fundamental graph traversal and pathfinding concepts.'
            ],
            text2: [
                'Experience mazes with Maze Game, blending puzzle-solving with modern web development.',
                'Built with React and advanced web technologies, the game features smooth animation of solving the maze. The BFS algorithm ensures accurate and efficient pathfinding while providing educational insights into a key computer science algorithm.'
            ],
            project: [
                {
                    image: '/images/maze-game/main.png',
                    title: 'Maze Game',
                    description: 'Solve mazes using the BFS algorithm. Create a grid, set start and end points, and see the algorithm find the shortest path. Customize maze size and layout for unique effect.'
                },
                {
                    image: '/images/maze-game/holdAndDraw.png',
                    title: 'Customizable Maze Creation',
                    description: 'Create custom mazes by clicking or dragging to set walls. Define start and end points to personalize the challenge. Intuitive controls make creating complex mazes fun and easy.'
                },
                {
                    image: '/images/maze-game/solved.png',
                    title: 'Algorithm in Action',
                    description: 'Watch the BFS algorithm find the shortest path in real-time. The visualization of the algorithm\'s process offers an educational experience on pathfinding.'
                },
                {
                    image: '/images/maze-game/big.png',
                    title: 'Scalable Maze Sizes',
                    description: 'See mazes of varying sizes, from simple 5x5 grids to complex 50x50 layouts. The responsive design ensures well rendered maze on any device or screen size.'
                },
            ],
            color: 'purple-500',
            rgbColor: 'rgb(139, 92, 246)', 
            link: 'https://github.com/Jackop05/Maze-game'
        },
        {
            param: 'recipe-app',
            name: 'Recipe App',
            upperTitle: 'Find Your Favorite Recipes',
            text1: [
                'Discover a vast collection of recipes.',
                'Whether you\'re a seasoned chef or a beginner, our app simplifies finding dishes that suit your taste and skill level.', 
                'Explore new cuisines and ingredients for your next culinary masterpiece.'
            ],
            text2: [
                'The app uses API calls to aggregate a wide variety of recipes, ensuring access to fresh and diverse options.', 
                'Each search provides detailed instructions, ingredient lists, and images, making it easier to decide what to cook next.'
            ],
            project: [
                {
                    image: '/images/recipe/main.png',
                    title: 'Recipe App',
                    description: 'A responsive web application to explore, search, and discover recipes. Features a user-friendly interface that simplifies finding the perfect meal, whether quick or elaborate.'
                },
                {
                    image: '/images/recipe/chicken.png',
                    title: 'Recipe Search',
                    description: 'Search recipes by ingredient or meal type. Enter an ingredient to see a curated list of recipes with detailed cooking instructions and ingredient lists.'
                },
                {
                    image: '/images/recipe/responsive.png',
                    title: 'Responsive Design',
                    description: 'Adapts beautifully to any screen size. Whether on a mobile phone, tablet, or desktop, the Recipe App ensures a seamless browsing experience for cooking up something new anytime.'
                }
            ],
            color: 'red-500',
            rgbColor: 'rgb(239, 68, 68)',
            link: 'https://github.com/Jackop05/Recipe-app',
        },
        {
            param: 'shirt-shop',
            name: '3D Shirts Shop',
            upperTitle: 'Design and Purchase Custom Shirts',
            text1: [
                '3D Shirts Shop is a platform that allows users to create and customize shirts in an interactive 3D environment.',
                'Select from various colors, styles, and designs to ensure each shirt reflects your personality and taste.',
                'Designed to be user-friendly for all levels of technical expertise.'
            ],
            text2: [
                'Leverages advanced 3D modeling and modern web technologies to provide an immersive shopping experience.',
                'Realistic shirt previews respond to user interactions, with intuitive controls guiding the customization process for easy navigation, even for those unfamiliar with technology.'
            ],
            project: [
                {
                    image: '/images/shirt-shop/main.png',
                    title: '3D Shirts Shop',
                    description: 'A platform for customizing shirts in 3D, offering a unique and interactive shopping experience.'
                },
                {
                    image: '/images/shirt-shop/colors.png',
                    title: 'Color Selection',
                    description: 'Choose from a wide palette of colors to design a shirt that matches your style and mood.'
                },
                {
                    image: '/images/shirt-shop/files.png',
                    title: 'Image Upload',
                    description: 'Upload your own images or graphics to personalize your shirt design, making it truly unique.'
                }
            ],
            color: 'yellow-500',
            rgbColor: 'rgb(234, 179, 8)', 
            link: 'https://github.com/Jackop05/Custom-shirts-shop',
        },
        {
            param: 'apple-clone',
            name: 'Apple Clone',
            upperTitle: 'Explore the Apple Experience',
            text1: [
                'The Apple Clone is a meticulously crafted replica of the Apple website, designed to capture Apple\'s iconic aesthetic.',
                'Showcases a blend of smooth animations and a modern design. Attention to detail creates an engaging and polished user experience, closely resembling Apple’s real applications.'
            ],
            text2: [
                'Built with the help of tutorial, using the latest web technologies to ensure a seamless experience across all devices.',
                'Utilizes React and Vite for fast loading times and dynamic content rendering. Incorporates responsive design principles and advanced CSS animations to enhance interactivity.'
            ],
            project: [
                {
                    image: '/images/apple/main.png',
                    title: 'Apple Clone Homepage',
                    description: 'Displays the overall layout and design, reflecting Apple\'s aesthetic with clean lines and simplicity.'
                },
                {
                    image: '/images/apple/rotating.png',
                    title: 'Interactive 3D Model',
                    description: 'Features an interactive 3D model allowing users to rotate and view products from different angles.'
                },
                {
                    image: '/images/apple/slick-design.png',
                    title: 'Sleek Design Elements',
                    description: 'Highlights modern dark style design and big animations or videos used throughout the site.'
                },
                {
                    image: '/images/apple/responsive.png',
                    title: 'Responsive Design',
                    description: 'Demonstrates responsive capabilities, showing how the site adapts to various screen sizes and orientations.'
                },
            ],
            color: 'gray-400',
            rgbColor: 'rgb(156, 163, 175)', 
            link: 'https://github.com/Jackop05/Apple_page_clone',
        },
        {
            param: 'weather-app',
            name: 'Weather App',
            upperTitle: 'Get Real-Time Weather Updates',
            text1: [
                'Weather App provides real-time weather information for any location worldwide.',
                'Features a clean and intuitive interface with essential details like temperature, wind speed, humidity, and atmospheric conditions.', 
                'Ideal for planning daily activities or preparing for trips, offering the latest and most accurate weather data.'
            ],
            text2: [
                'Integrates advanced API calls for reliable weather data from various trusted sources.',
                'Consolidates information from multiple inputs for a comprehensive overview of current weather conditions, making it an essential tool for timely and informed weather updates.'
            ],
            project: [
                {
                    image: '/images/weather-app/sunny.png',
                    title: 'Live Weather Updates',
                    description: 'Provides up-to-the-minute weather updates, offering accurate information about current conditions and forecasts for the coming days. Stay informed for daily activities and outdoor events.'
                },
                {
                    image: '/images/weather-app/foggy.png',
                    title: 'Dynamic Weather Conditions',
                    description: 'Features context-sensitive weather icons that change based on current conditions, such as sunny, foggy, rainy, or snowy, presented in a clear and visually engaging format.'
                },
                {
                    image: '/images/weather-app/responsive.png',
                    title: 'Responsive Design',
                    description: 'Adapts seamlessly to various screen sizes, ensuring a consistent and user-friendly experience on smartphones, tablets, and desktops. Access weather information easily, regardless of the device.'
                }
            ],
            color: 'cyan-500',
            rgbColor: 'rgb(6, 182, 212)',
            link: 'https://github.com/Jackop05/Weather-app/tree/master',
        }   
    ],
    'java': [
        {
            "param": "java-maze-solver",
            "name": "Java Maze Solver",
            "upperTitle": "Solve mazes quickly and displays it",
            "text1": [
                "The Java Maze Solver is designed to navigate through complex mazes using efficient algorithms. This tool showcases how quickly it can find the shortest path and visualize the solution."
            ],
            "text2": [
                "Key features include: solving mazes of varying sizes, dynamic visual display of the solving process, and user-configurable start and end points. Built using Java Swing for visualization and core algorithm handling."
            ],
            "project": [
                {
                    "image": "/images/maze-java/labyrinth.png",
                    "title": "Maze Input",
                    "description": "This is a sample labyrinth input, where the user can see the complexity of the maze before it is solved."
                },
                {
                    "image": "/images/maze-java/solvedLabyrinth.png",
                    "title": "Solved Maze",
                    "description": "The algorithm processes the maze and highlights the correct path from start to finish."
                },
                {
                    "image": "/images/maze-java/changePoints.png",
                    "title": "Start/End Points",
                    "description": "Allows users to dynamically change starting and ending points for recalculating the optimal path."
                }
            ],
            "color": "purple-500",
            "rgbColor": "rgb(139, 92, 246)",
            "link": "https://github.com/Jackop05/Maze-java"
        },
        {
            "param": "java-weather-app",
            "name": "Java Weather App",
            "upperTitle": "Get real-time weather updates",
            "text1": [
                "This Java Weather App fetches real-time weather data and displays it to the user in a clean and intuitive interface."
            ],
            "text2": [
                "Features include real-time weather updates, forecast for multiple cities, and visual representation of weather conditions (sunny, cloudy, rainy, etc.). Built using Java, it integrates with weather APIs for accurate and up-to-date information."
            ],
            "project": [
                {
                    "image": "/images/weather-app-java/sunny.png",
                    "title": "Sunny Day",
                    "description": "Displays a sunny weather condition with temperature, humidity, and wind speed details."
                },
                {
                    "image": "/images/weather-app-java/cloudy.png",
                    "title": "Cloudy Day",
                    "description": "Shows cloudy weather conditions along with real-time updates of other weather parameters."
                },
                {
                    "image": "/images/weather-app-java/code.png",
                    "title": "Java Code Snippet",
                    "description": "A part of the code that interacts with the weather API and processes the data to display it to the user."
                }
            ],
            "color": "cyan-500",
            "rgbColor": "rgb(6, 182, 212)",
            "link": "https://github.com/Jackop05/weather-app-java"
        },        
    ],    
    'c': [
        {
            "param": "c-maze-solver",
            "name": "C Maze Solver",
            "upperTitle": "Solve mazes efficiently using C",
            "text1": [
                "C Maze Solver is an efficient tool designed to navigate and solve various maze configurations using algorithms like Depth-First Search (DFS) and A* search. This project demonstrates how to implement maze-solving techniques in C, providing insights into algorithm design and optimization. Users can experiment with different maze layouts and observe how the chosen algorithm adapts to various challenges."
            ],
            "text2": [
                "With a focus on performance and clarity, C Maze Solver features a simple command-line interface where users can input maze structures and visualize the solving process. The underlying algorithms are optimized for speed, making it suitable for solving large and complex mazes quickly. Additionally, the project includes detailed documentation that explains the logic behind each algorithm, allowing users to deepen their understanding of maze-solving strategies."
            ],
            "project": [
                {
                    "image": "/images/c-maze/solvedMaze.png",
                    "title": "Solved Maze Example",
                    "description": "An example of a solved maze, showcasing the path taken by the algorithm. This image illustrates the end result after applying the maze-solving techniques."
                },
                {
                    "image": "/images/c-maze/code.png",
                    "title": "Implementation Code",
                    "description": "A snippet of the C code used to implement the maze-solving algorithms. The code is well-commented to help users understand the logic and flow of the program."
                },
                {
                    "image": "/images/c-maze/steps.png",
                    "title": "Solving Process Steps",
                    "description": "Visual representation of the steps taken to solve the maze, illustrating the algorithm's progress. This helps users visualize how different paths are explored and discarded."
                }
            ],
            "color": "red-500",
            "rgbColor": "rgb(239, 68, 68)",
            "link": "https://github.com/Jackop05/C-maze-solver"
        },
        {
            "param": "langtons-ant",
            "name": "Langton's Ant",
            "upperTitle": "Explore the world of cellular automata",
            "text1": [
                "Langton's Ant is a fascinating example of how simple rules can lead to complex behaviors. In this project, you'll control an 'ant' that moves on a grid based on the colors of the cells it visits. The ant turns right on white cells and left on black cells, flipping the color of the cell after each move. Over time, this leads to emergent patterns that are both intriguing and beautiful, showcasing the principles of cellular automata and complexity theory. The project serves as an engaging introduction to computational systems."
            ],
            "text2": [
                "Developed with modern web technologies, Langton's Ant features interactive controls that allow users to start, pause, and reset the simulation. Customize the grid size, color scheme, and speed of the ant to explore the behavior of this unique cellular automaton. The visualizations provide insights into how simple rules can create unexpected complexity, making it a perfect blend of art and science. As you watch the ant navigate the grid, you’ll discover how initial conditions can lead to drastically different outcomes, emphasizing the unpredictability of chaotic systems."
            ],
            "project": [
                {
                    "image": "/images/langtons-ant/main.png",
                    "title": "Langton's Ant Simulation",
                    "description": "The main simulation interface displaying the ant's movement across the grid. This visual representation shows how the ant interacts with the cells and how patterns evolve over time."
                },
                {
                    "image": "/images/langtons-ant/code.png",
                    "title": "Code Implementation",
                    "description": "A section of the code used to implement Langton's Ant, highlighting the rules and behaviors. This code is modular, allowing users to easily modify and experiment with the ant's rules."
                }
            ],
            "color": "cyan-500",
            "rgbColor": "rgb(6, 182, 212)",
            "link": "https://github.com/Jackop05/Langtons-Ant"
        },
        {
            "param": "gauss-matrix-solver",
            "name": "Gauss Matrix Solver",
            "upperTitle": "Solve linear equations with ease",
            "text1": [
                "The Gauss Matrix Solver is a powerful tool designed for solving systems of linear equations using Gaussian elimination. Whether you're a student learning linear algebra or an engineer needing quick solutions, this application simplifies the process of solving matrices. Input your matrix coefficients and constants, and the solver will provide the solution in real-time. The tool aims to enhance understanding of linear equations by allowing users to see the direct application of theoretical concepts."
            ],
            "text2": [
                "Built with user experience in mind, the Gauss Matrix Solver features a clean and intuitive interface. You can input your equations, visualize the steps of the Gaussian elimination process, and obtain the solutions easily. This project serves as an excellent resource for understanding linear algebra concepts and enhancing problem-solving skills. The visual aids help clarify each step of the elimination process, making it easier for users to grasp the fundamental principles of linear algebra."
            ],
            "project": [
                {
                    "image": "/images/gauss/main.png",
                    "title": "Matrix Solver Interface",
                    "description": "The main interface of the Gauss Matrix Solver, showing how to input matrices. This user-friendly layout encourages experimentation and learning."
                },
                {
                    "image": "/images/gauss/code.png",
                    "title": "Gaussian Elimination Code",
                    "description": "Code snippet demonstrating the Gaussian elimination algorithm used in the solver. This implementation emphasizes clarity and educational value, allowing users to learn through direct interaction with the code."
                }
            ],
            "color": "yellow-600",
            "rgbColor": "rgb(253, 230, 0)",
            "link": "https://github.com/Jackop05/Gauss-matrix-calculator"
        }
    ],    
};

export default singleProjectData;
