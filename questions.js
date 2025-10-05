//Array of questions grouped by category (25 questions each)

const questions = [
    {
        category: "programming",
        questions: [
            {
                question: "What does HTML stand for?",
                options:["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
                correctAnswer: 1,
            },
            {
                question: "Which of the following is a correct way to declare a variable in JavaScript",
                options:["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
                correctAnswer: 0,
            },
            {
                question: "How do you write comment in Python",
                options:["// This is a comment", "# This is a comment", "/* This is a comment*/", "<!-- This is a comment-->"],
                correctAnswer: 1,
            },
            {
        question: "Which function is used to output data to the screen in Python?",
        options: ["echo()", "print()", "printf()", "display()"],
        correctAnswer: 1,
    },
    {
        question: "What is the correct file extension for Python files?",
        options: [".pyth", ".pt", ".py", ".p"],
        correctAnswer: 2,
    },
{
        question: "Which keyword is used to create a class in Python?",
        options: ["define", "function", "class", "object"],
        correctAnswer: 2,
    },
    {
        question: "How do you start a for loop in Python?",
        options: ["for i in range(5):", "for (i = 0; i < 5; i++)", "foreach i in range(5)", "loop i from 1 to 5"],
        correctAnswer: 0,
    },
    {
        question: "What is the correct way to import a module in Python?",
        options: ["include math", "import math", "using math", "require(math)"],
        correctAnswer: 1,
    },
    {
        question: "What is the correct way to define a list in Python?",
        options: ["list = {1, 2, 3}", "list = (1, 2, 3)", "list = [1, 2, 3]", "list = <1, 2, 3>"],
        correctAnswer: 2,
    },
    {
        question: "Which method can be used to remove whitespace from a string?",
        options: ["strip()", "trim()", "remove()", "delete()"],
        correctAnswer: 0,
    },
    {
        question: "What is the output of: print(2 ** 3)?",
        options: ["6", "8", "9", "23"],
        correctAnswer: 1,
    },
    {
        question: "How do you insert comments on multiple lines?",
        options: ["/* comment */", "# comment", "''' comment '''", "<!-- comment -->"],
        correctAnswer: 2,
    },
    {
        question: "What data type is the object below? x = 'Hello World'",
        options: ["list", "str", "dict", "tuple"],
        correctAnswer: 1,
    },
    {
        question: "Which one is a tuple?",
        options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "tuple[1, 2, 3]"],
        correctAnswer: 0,
    },
    {
        question: "How do you start an if statement in Python?",
        options: ["if x == y:", "if (x == y)", "if x = y then", "if x == y then"],
        correctAnswer: 0,
    },
    {
        question: "Which operator is used for multiplication?",
        options: ["x", "*", "×", "mul"],
        correctAnswer: 1,
    },
    {
        question: "Which keyword is used to return a value from a function?",
        options: ["return", "give", "send", "output"],
        correctAnswer: 0,
    },
    {
        question: "How do you check the data type of a variable?",
        options: ["typeOf(x)", "typeof(x)", "type(x)", "dataType(x)"],
        correctAnswer: 2,
    },
    {
        question: "What is the correct way to create a dictionary?",
        options: ["{ 'name': 'John', 'age': 30 }", "[ 'name' = 'John', 'age' = 30 ]", "( 'name': 'John', 'age': 30 )", "<'name':'John', 'age':30>"],
        correctAnswer: 0,
    },
    {
        question: "How do you get the number of items in a list?",
        options: ["count(list)", "size(list)", "len(list)", "length(list)"],
        correctAnswer: 2,
    },
    {
        question: "Which keyword is used to handle exceptions in Python?",
        options: ["try", "catch", "except", "handle"],
        correctAnswer: 2,
    },
    {
        question: "What will this return: bool(0)?",
        options: ["True", "False", "0", "None"],
        correctAnswer: 1,
    },
    {
        question: "How do you create a while loop in Python?",
        options: ["while x < 5:", "while (x < 5)", "loop while x < 5", "repeat until x < 5"],
        correctAnswer: 0,
    },
    {
        question: "How do you get user input in Python 3?",
        options: ["get()", "scan()", "input()", "read()"],
        correctAnswer: 2,
    },
    {
        question: "What is the output of print(len('Python'))?",
        options: ["5", "6", "7", "Error"],
        correctAnswer: 1,
    },
    {
        question: "How do you start a comment in Python?",
        options: ["#", "//", "--", "/*"],
        correctAnswer: 0,
    },
    {
        question: "Which collection is ordered and changeable?",
        options: ["tuple", "list", "set", "dict"],
        correctAnswer: 1,
    },
    {
        question: "Which function converts a string to lowercase?",
        options: ["lower()", "toLower()", "caseLower()", "downcase()"],
        correctAnswer: 0,
    },
    {
        question: "Which statement is used to stop a loop?",
        options: ["stop", "exit", "break", "end"],
        correctAnswer: 2,
    },
    {
        question: "How do you start an else block?",
        options: ["else", "else:", "otherwise:", "otherwise"],
        correctAnswer: 1,
    },
    {
        question: "Which symbol is used for floor division?",
        options: ["/", "//", "%", "÷"],
        correctAnswer: 1,
    },
    {
        question: "Which function returns the absolute value?",
        options: ["abs()", "absolute()", "fabs()", "value()"],
        correctAnswer: 0,
    },
    {
        question: "How do you create a set in Python?",
        options: ["set = {1, 2, 3}", "set = [1, 2, 3]", "set = (1, 2, 3)", "set = <1, 2, 3>"],
        correctAnswer: 0,
    },
    {
        question: "Which function can be used to convert a number to a string?",
        options: ["int()", "float()", "str()", "repr()"],
        correctAnswer: 2,
    },
    {
        question: "How do you add an element to a list?",
        options: ["list.add(5)", "list.append(5)", "list.push(5)", "list.insert(5)"],
        correctAnswer: 1,
    },
    {
        question: "How do you remove an item from a list?",
        options: ["remove()", "delete()", "pop()", "Both remove() and pop()"],
        correctAnswer: 3,
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["define", "func", "def", "function"],
        correctAnswer: 2,
    },
    {
        question: "What is the result of 10 % 3?",
        options: ["3", "1", "0", "10"],
        correctAnswer: 1,
    },
    {
        question: "How do you round a number to the nearest integer?",
        options: ["round()", "floor()", "ceil()", "int()"],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to create an anonymous function?",
        options: ["def", "lambda", "func", "anon"],
        correctAnswer: 1,
    },
    {
        question: "Which function is used to find the maximum value?",
        options: ["max()", "maximum()", "greatest()", "highest()"],
        correctAnswer: 0,
    },
    {
        question: "What will print(type([])) return?",
        options: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "<class 'set'>"],
        correctAnswer: 1,
    },
    {
        question: "What is the output of print(10 == 10.0)?",
        options: ["True", "False", "Error", "None"],
        correctAnswer: 0,
    },
    {
        question: "What is the result of 'Python'[::-1]?",
        options: ["nohtyP", "Python", "error", "thonPy"],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to exit a function?",
        options: ["end", "stop", "return", "break"],
        correctAnswer: 2,
    },
    {
        question: "What is the correct syntax to check if x is not equal to y?",
        options: ["x != y", "x <> y", "x =! y", "x not= y"],
        correctAnswer: 0,
    },
    {
        question: "Which method adds multiple elements to a list?",
        options: ["append()", "extend()", "add()", "insert()"],
        correctAnswer: 1,
    },
    {
        question: "How do you open a file for reading?",
        options: ["open('file.txt')", "open('file.txt', 'r')", "read('file.txt')", "file.open('r')"],
        correctAnswer: 1,
    },
    {
        question: "Which keyword is used to define inheritance?",
        options: ["inherits", "extends", "super", "class Child(Parent):"],
        correctAnswer: 3,
    },
    {
        question: "Which function can be used to sort a list?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        correctAnswer: 0,
    },
    {
        question: "Which built-in function returns a sequence of numbers?",
        options: ["range()", "list()", "seq()", "loop()"],
        correctAnswer: 0,
    },
    {
        question: "Which keyword is used to continue to the next iteration of a loop?",
        options: ["skip", "next", "continue", "pass"],
        correctAnswer: 2,
    },
        ]
    },

    //geography
    {
        category: "geography",
        questions: [
            {
                question: "Which is the longest river in the  world?",
                options:["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                correctAnswer: 1,
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options:["China", "South Korea", "Japan", "Thailand"],
                correctAnswer: 2,
            },
            {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Madrid", "Berlin"],
        correctAnswer: 0,
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: 2,
    },
    {
        question: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        correctAnswer: 2,
    },
    {
        question: "What is the national currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
        correctAnswer: 2,
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1,
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        correctAnswer: 1,
    },
    {
        question: "Who discovered gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
        correctAnswer: 1,
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oxide"],
        correctAnswer: 1,
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correctAnswer: 2,
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
        correctAnswer: 1,
    },
    {
        question: "Which language is the most spoken in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        correctAnswer: 2,
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Osaka"],
        correctAnswer: 2,
    },
    {
        question: "Who invented the light bulb?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
        correctAnswer: 1,
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: 2,
    },
    {
        question: "How many colors are there in a rainbow?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        options: ["France", "England", "Germany", "Canada"],
        correctAnswer: 0,
    },
    {
        question: "In which year did World War II end?",
        options: ["1942", "1945", "1948", "1950"],
        correctAnswer: 1,
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Cheetah"],
        correctAnswer: 1,
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        correctAnswer: 2,
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Iron", "Diamond", "Gold", "Granite"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: 2,
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Japan", "Russia"],
        correctAnswer: 1,
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        correctAnswer: 0,
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "HO2", "OH2"],
        correctAnswer: 1,
    },
    {
        question: "Which city is known as the Big Apple?",
        options: ["Chicago", "Los Angeles", "New York City", "San Francisco"],
        correctAnswer: 2,
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correctAnswer: 1,
    },
    {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: 2,
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: 1,
    },
    {
        question: "Which country is famous for pizza and pasta?",
        options: ["Spain", "Italy", "Greece", "France"],
        correctAnswer: 1,
    },
    {
        question: "Which natural disaster is measured using the Richter scale?",
        options: ["Flood", "Hurricane", "Earthquake", "Tornado"],
        correctAnswer: 2,
    },
    {
        question: "Which instrument measures temperature?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        correctAnswer: 1,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: 0,
    },
    {
        question: "Which country has the maple leaf on its flag?",
        options: ["Denmark", "Canada", "Switzerland", "Norway"],
        correctAnswer: 1,
    },
    {
        question: "How many players are there in a football (soccer) team?",
        options: ["9", "10", "11", "12"],
        correctAnswer: 2,
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Copper", "Silver"],
        correctAnswer: 0,
    },
    {
        question: "What is the largest continent by population?",
        options: ["Africa", "Asia", "Europe", "South America"],
        correctAnswer: 1,
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
        correctAnswer: 1,
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
        correctAnswer: 1,
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Cheetah", "Lion", "Leopard", "Tiger"],
        correctAnswer: 0,
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Neptune", "Jupiter", "Saturn", "Uranus"],
        correctAnswer: 2,
    },
    {
        question: "Which ocean is on the east coast of the United States?",
        options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
        correctAnswer: 2,
    },
    {
        question: "Which country is the largest producer of coffee?",
        options: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
        correctAnswer: 0,
    },
    {
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "O negative", "AB"],
        correctAnswer: 2,
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "Australia", "Madagascar", "Borneo"],
        correctAnswer: 0,
    },
        ]
    },

    //mathematics
    {
        category: "mathematics",
        questions: [
            {
                question: "What is the square root of 144?",
                options:["10", "11", "12", "13"],
                correctAnswer: 2,
            },
            {
                question: "What is 15 x 13?",
                options:["180", "185", "195", "200"],
                correctAnswer: 2,
            },
            {
                question: "What is the value of 8*8*8?",
                options:["512", "216", "256", "128"],
                correctAnswer: 0,
            },
            {
        question: "What is 15 + 27?",
        options: ["32", "42", "40", "39"],
        correctAnswer: 1,
    },
    {
        question: "What is 9 × 8?",
        options: ["72", "81", "64", "69"],
        correctAnswer: 0,
    },
    {
        question: "What is 100 ÷ 25?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
    },
    {
        question: "What is 7²?",
        options: ["14", "49", "21", "56"],
        correctAnswer: 1,
    },
    {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: 1,
    },
    {
        question: "What is 50% of 200?",
        options: ["25", "50", "75", "100"],
        correctAnswer: 3,
    },
    {
        question: "What is 3³?",
        options: ["6", "9", "27", "18"],
        correctAnswer: 2,
    },
    {
        question: "Simplify: 5 × (2 + 3)",
        options: ["10", "15", "20", "25"],
        correctAnswer: 3,
    },
    {
        question: "What is ⅓ of 90?",
        options: ["20", "25", "30", "40"],
        correctAnswer: 2,
    },
    {
        question: "What is the perimeter of a square with side 8 cm?",
        options: ["24 cm", "32 cm", "40 cm", "16 cm"],
        correctAnswer: 1,
    },
    {
        question: "What is the area of a rectangle 5 cm by 10 cm?",
        options: ["40 cm²", "45 cm²", "50 cm²", "55 cm²"],
        correctAnswer: 2,
    },
    {
        question: "Solve: 12 - 4 × 2",
        options: ["16", "8", "4", "12"],
        correctAnswer: 1,
    },
    {
        question: "What is the next number in the sequence 2, 4, 8, 16, ?",
        options: ["18", "20", "24", "32"],
        correctAnswer: 3,
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
    },
    {
        question: "What is 0.75 as a fraction?",
        options: ["3/2", "3/4", "1/4", "2/3"],
        correctAnswer: 1,
    },
    {
        question: "What is 8 × 7 + 6?",
        options: ["56", "62", "58", "64"],
        correctAnswer: 1,
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 1,
    },
    {
        question: "What is the sum of angles in a triangle?",
        options: ["90°", "120°", "180°", "360°"],
        correctAnswer: 2,
    },
    {
        question: "What is 9² + 10²?",
        options: ["81", "100", "181", "190"],
        correctAnswer: 2,
    },
    {
        question: "If x = 5, what is 2x + 3?",
        options: ["10", "12", "13", "15"],
        correctAnswer: 2,
    },
    {
        question: "What is 1/2 + 1/4?",
        options: ["1/8", "1/2", "3/4", "2/4"],
        correctAnswer: 2,
    },
    {
        question: "What is 10% of 250?",
        options: ["20", "25", "30", "35"],
        correctAnswer: 1,
    },
    {
        question: "Convert 0.5 to a percentage.",
        options: ["25%", "50%", "75%", "100%"],
        correctAnswer: 1,
    },
    {
        question: "How many degrees are in a right angle?",
        options: ["45°", "90°", "120°", "180°"],
        correctAnswer: 1,
    },
    {
        question: "Simplify: 4 + 3 × 2",
        options: ["10", "14", "8", "6"],
        correctAnswer: 0,
    },
    {
        question: "What is the cube root of 27?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
    },
    {
        question: "What is the result of 100 - (25 × 2)?",
        options: ["40", "45", "50", "55"],
        correctAnswer: 2,
    },
    {
        question: "How many centimeters are in one meter?",
        options: ["10", "50", "100", "1000"],
        correctAnswer: 2,
    },
    {
        question: "If a = 2 and b = 3, what is a² + b²?",
        options: ["10", "12", "9", "8"],
        correctAnswer: 0,
    },
    {
        question: "What is ¾ of 100?",
        options: ["25", "50", "75", "100"],
        correctAnswer: 2,
    },
    {
        question: "Simplify: (6 + 2) ÷ 4",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
    },
    {
        question: "What is the value of 5 × 0?",
        options: ["0", "5", "1", "Undefined"],
        correctAnswer: 0,
    },
    {
        question: "If you divide 36 by 9, what do you get?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
    },
    {
        question: "What is 2⁵?",
        options: ["10", "16", "32", "64"],
        correctAnswer: 2,
    },
    {
        question: "What is the perimeter of a rectangle with length 10 cm and width 5 cm?",
        options: ["20 cm", "25 cm", "30 cm", "35 cm"],
        correctAnswer: 2,
    },
    {
        question: "What is the area of a circle with radius 7 cm? (π = 3.14)",
        options: ["120 cm²", "143.5 cm²", "153.9 cm²", "160 cm²"],
        correctAnswer: 2,
    },
    {
        question: "What is the mode of these numbers: 2, 4, 4, 6, 8?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
    },
    {
        question: "What is 9 × 9?",
        options: ["81", "72", "90", "99"],
        correctAnswer: 0,
    },
    {
        question: "Simplify: 18 ÷ 3 × 2",
        options: ["3", "6", "9", "12"],
        correctAnswer: 3,
    },
    {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correctAnswer: 2,
    },
    {
        question: "How many millimeters are there in one meter?",
        options: ["10", "100", "1000", "10000"],
        correctAnswer: 2,
    },
    {
        question: "What is 8 + (9 - 3)?",
        options: ["12", "13", "14", "15"],
        correctAnswer: 3,
    },
    {
        question: "Simplify: 2(3 + 4)",
        options: ["6", "7", "8", "14"],
        correctAnswer: 3,
    },
    {
        question: "What is the average of 5, 10, and 15?",
        options: ["5", "10", "12", "15"],
        correctAnswer: 1,
    },
    {
        question: "What is the missing number: 5, 10, 15, __, 25?",
        options: ["18", "20", "22", "24"],
        correctAnswer: 1,
    },
    {
        question: "If 4x = 20, what is x?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
    },
    {
        question: "Simplify: 10² ÷ 5",
        options: ["15", "20", "25", "30"],
        correctAnswer: 2,
    },
    {
        question: "What is 60 ÷ (5 + 1)?",
        options: ["10", "12", "15", "20"],
        correctAnswer: 0,
    },
    {
        question: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
    },
    {
        question: "What is the product of 11 and 11?",
        options: ["111", "120", "121", "122"],
        correctAnswer: 2,
    },
    {
        question: "What is the value of (5 + 3) × (2 + 1)?",
        options: ["16", "18", "20", "24"],
        correctAnswer: 2,
    },
        ]
    },

    //Entertainment
    {
        category: "entertainment",
        questions: [
            {
                question: "Who won the Academy Award for Best Actor in 2022?",
                options:["Leonardo DiCaprio", "Will Smith", "Joaquin Pheonix", "Matthew McConaughey"],
                correctAnswer: 1,
            },
            {
                question: "Which movie won the Academy Award for Best Picture in 2021?",
                options:["Parasite", "1917", "The Shape of Water", "Nomadland"],
                correctAnswer: 3,
            },
            {
                question: "Who played the character of Jack Dawson in the movie Titanic?",
                options:["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
                correctAnswer: 0,
            },
            {
        question: "Who directed the movie Inception?",
        options:["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"],
        correctAnswer: 0,
    },
    {
        question: "In which movie did Robert Downey Jr. play Tony Stark?",
        options:["Iron Man", "The Dark Knight", "Spider-Man", "Superman"],
        correctAnswer: 0,
    },
    {
        question: "Which actress played Hermione Granger in the Harry Potter series?",
        options:["Emma Watson", "Jennifer Lawrence", "Natalie Portman", "Anne Hathaway"],
        correctAnswer: 0,
    },
    {
        question: "What is the name of the fictional African country in Black Panther?",
        options:["Wakanda", "Zamunda", "Genovia", "Latveria"],
        correctAnswer: 0,
    },
    {
        question: "Who voiced the character of Woody in Toy Story?",
        options:["Tom Hanks", "Tim Allen", "Chris Evans", "Robin Williams"],
        correctAnswer: 0,
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        options:["Parasite", "1917", "Joker", "Ford v Ferrari"],
        correctAnswer: 0,
    },
    {
        question: "Who played the Joker in The Dark Knight?",
        options:["Heath Ledger", "Jared Leto", "Joaquin Phoenix", "Jack Nicholson"],
        correctAnswer: 0,
    },
    {
        question: "In which year was the first Avengers movie released?",
        options:["2012", "2010", "2015", "2018"],
        correctAnswer: 0,
    },
    {
        question: "Who played the role of Forrest Gump?",
        options:["Tom Hanks", "Robin Williams", "Matt Damon", "Kevin Costner"],
        correctAnswer: 0,
    },
    {
        question: "Who directed Avatar?",
        options:["James Cameron", "Peter Jackson", "George Lucas", "Ridley Scott"],
        correctAnswer: 0,
    },
    {
        question: "What is the name of the hobbit played by Elijah Wood in The Lord of the Rings?",
        options:["Frodo Baggins", "Bilbo Baggins", "Samwise Gamgee", "Merry Brandybuck"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features the quote 'Say hello to my little friend'?",
        options:["Scarface", "The Godfather", "Goodfellas", "Casino"],
        correctAnswer: 0,
    },
    {
        question: "Who played Wolverine in the X-Men movies?",
        options:["Hugh Jackman", "Chris Hemsworth", "Ryan Reynolds", "Ben Affleck"],
        correctAnswer: 0,
    },
    {
        question: "What is the name of the main robot in Wall-E?",
        options:["WALL-E", "EVE", "BB-8", "R2-D2"],
        correctAnswer: 0,
    },
    {
        question: "Who directed the Jurassic Park movie?",
        options:["Steven Spielberg", "James Cameron", "Christopher Nolan", "Tim Burton"],
        correctAnswer: 0,
    },
    {
        question: "In which movie does Keanu Reeves play Neo?",
        options:["The Matrix", "John Wick", "Speed", "Constantine"],
        correctAnswer: 0,
    },
    {
        question: "Who played the character of Black Widow in the Marvel movies?",
        options:["Scarlett Johansson", "Brie Larson", "Natalie Portman", "Gal Gadot"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features the character Captain Jack Sparrow?",
        options:["Pirates of the Caribbean", "Treasure Island", "Peter Pan", "Hook"],
        correctAnswer: 0,
    },
    {
        question: "Who directed The Dark Knight?",
        options:["Christopher Nolan", "Martin Scorsese", "Ridley Scott", "James Cameron"],
        correctAnswer: 0,
    },
    {
        question: "Who starred as Deadpool?",
        options:["Ryan Reynolds", "Chris Pratt", "Robert Downey Jr.", "Hugh Jackman"],
        correctAnswer: 0,
    },
    {
        question: "In which year was Titanic released?",
        options:["1997", "1999", "1995", "2000"],
        correctAnswer: 0,
    },
    {
        question: "Which actor played Harry Potter?",
        options:["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Elijah Wood"],
        correctAnswer: 0,
    },
    {
        question: "What is the name of the kingdom in Frozen?",
        options:["Arendelle", "Narnia", "Westeros", "Eldorado"],
        correctAnswer: 0,
    },
    {
        question: "Who directed The Godfather?",
        options:["Francis Ford Coppola", "Martin Scorsese", "Steven Spielberg", "Stanley Kubrick"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features a clown named Pennywise?",
        options:["It", "Joker", "Clown", "The Nun"],
        correctAnswer: 0,
    },
    {
        question: "Who played Tony Montana in Scarface?",
        options:["Al Pacino", "Robert De Niro", "Joe Pesci", "Jack Nicholson"],
        correctAnswer: 0,
    },
    {
        question: "Which movie popularized the phrase 'May the Force be with you'?",
        options:["Star Wars", "Star Trek", "Guardians of the Galaxy", "Avatar"],
        correctAnswer: 0,
    },
    {
        question: "Who played Spider-Man in Spider-Man: No Way Home?",
        options:["Tom Holland", "Tobey Maguire", "Andrew Garfield", "Chris Evans"],
        correctAnswer: 0,
    },
    {
        question: "Which movie is about dreams within dreams?",
        options:["Inception", "Interstellar", "Tenet", "Memento"],
        correctAnswer: 0,
    },
    {
        question: "Who played the role of Iron Man’s assistant, Pepper Potts?",
        options:["Gwyneth Paltrow", "Scarlett Johansson", "Emily Blunt", "Anne Hathaway"],
        correctAnswer: 0,
    },
    {
        question: "Who directed Pulp Fiction?",
        options:["Quentin Tarantino", "Guy Ritchie", "Martin Scorsese", "Steven Spielberg"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features the song 'Let It Go'?",
        options:["Frozen", "Moana", "Encanto", "Tangled"],
        correctAnswer: 0,
    },
    {
        question: "What is the name of Batman’s butler?",
        options:["Alfred", "Jeeves", "Jarvis", "Watson"],
        correctAnswer: 0,
    },
    {
        question: "Which film franchise features the sorting hat?",
        options:["Harry Potter", "The Chronicles of Narnia", "Percy Jackson", "Fantastic Beasts"],
        correctAnswer: 0,
    },
    {
        question: "Who starred as Wonder Woman?",
        options:["Gal Gadot", "Brie Larson", "Scarlett Johansson", "Charlize Theron"],
        correctAnswer: 0,
    },
    {
        question: "Who played the role of Elsa in Frozen?",
        options:["Idina Menzel", "Kristen Bell", "Adele Dazeem", "Mandy Moore"],
        correctAnswer: 0,
    },
    {
        question: "Which movie won Best Picture at the 2023 Oscars?",
        options:["Everything Everywhere All at Once", "Avatar: The Way of Water", "Top Gun: Maverick", "The Banshees of Inisherin"],
        correctAnswer: 0,
    },
    {
        question: "In which movie would you hear 'Life finds a way'?",
        options:["Jurassic Park", "Interstellar", "Inception", "The Martian"],
        correctAnswer: 0,
    },
    {
        question: "Which actor voiced Donkey in Shrek?",
        options:["Eddie Murphy", "Chris Rock", "Will Smith", "Kevin Hart"],
        correctAnswer: 0,
    },
    {
        question: "Who played Captain America in the Marvel Cinematic Universe?",
        options:["Chris Evans", "Chris Hemsworth", "Chris Pratt", "Sebastian Stan"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features a talking snowman named Olaf?",
        options:["Frozen", "Encanto", "Moana", "Brave"],
        correctAnswer: 0,
    },
    {
        question: "Who played Thor?",
        options:["Chris Hemsworth", "Chris Evans", "Jason Momoa", "Tom Hardy"],
        correctAnswer: 0,
    },
    {
        question: "Which 1994 movie features lions and the song 'Circle of Life'?",
        options:["The Lion King", "Madagascar", "Jungle Book", "Zootopia"],
        correctAnswer: 0,
    },
    {
        question: "Who played the main character in The Revenant?",
        options:["Leonardo DiCaprio", "Matt Damon", "Christian Bale", "Brad Pitt"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features a giant ape called Kong?",
        options:["King Kong", "Godzilla", "Rampage", "Mighty Joe Young"],
        correctAnswer: 0,
    },
    {
        question: "Who directed The Shawshank Redemption?",
        options:["Frank Darabont", "Steven Spielberg", "David Fincher", "Christopher Nolan"],
        correctAnswer: 0,
    },
    {
        question: "Which movie features the quote 'I'm the king of the world!'?",
        options:["Titanic", "The Lion King", "Gladiator", "Braveheart"],
        correctAnswer: 0,
    },
    {
        question: "Who played the lead role in John Wick?",
        options:["Keanu Reeves", "Tom Cruise", "Liam Neeson", "Matt Damon"],
        correctAnswer: 0,
    },
    {
        question: "In which movie does a robot say 'I'll be back'?",
        options:["The Terminator", "Robocop", "Predator", "Transformers"],
        correctAnswer: 0,
    },
    {
        question: "Who directed the movie Interstellar?",
        options:["Christopher Nolan", "Ridley Scott", "James Cameron", "Denis Villeneuve"],
        correctAnswer: 0,
    }
        ]
    },

];