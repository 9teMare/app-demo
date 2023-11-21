import dayjs from "dayjs";

const cardInfo = [
    {
        id: 0,
        title: "Colors of the Mind Workshop",
        author: "John Doe",
        lastUpdated: dayjs().subtract(2, "days").format("DD/MM/YYYY"),
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        uri: require("../../assets/images/card1.jpg"),
        recipe: {
            prepTime: "10 mins",
            cookTime: "30 mins",
            totalTime: "40 mins",
            serving: 4,
            yield: "4 servings",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: "1 cup",
                },
                {
                    name: "Flour",
                    quantity: "2 cups",
                },
                {
                    name: "Milk",
                    quantity: "1 cup",
                },
            ],
            directions: [
                {
                    step: 1,
                    instructions: "Preheat the oven to 350°F (180°C).",
                },
                {
                    step: 2,
                    instructions: "In a large mixing bowl, combine the flour, sugar, and baking powder.",
                },
                {
                    step: 3,
                    instructions: "Add the eggs, milk, and vanilla extract to the dry ingredients. Mix until well combined.",
                },
                {
                    step: 4,
                    instructions: "Grease a baking pan and pour the batter into it evenly.",
                },
                {
                    step: 5,
                    instructions: "Bake in the preheated oven for 25-30 minutes or until a toothpick inserted into the center comes out clean.",
                },
                {
                    step: 6,
                    instructions: "Allow the cake to cool completely before frosting or serving.",
                },
                {
                    step: 7,
                    instructions: "Enjoy your delicious homemade cake!",
                },
            ],
        },
    },
    {
        id: 1,
        title: "Eat Right, Feel Right!",
        author: "Alice",
        lastUpdated: dayjs().subtract(4, "days").format("DD/MM/YYYY"),
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        uri: require("../../assets/images/card2.jpg"),
        recipe: {
            prepTime: "10 mins",
            cookTime: "30 mins",
            totalTime: "40 mins",
            serving: 4,
            yield: "4 servings",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: "1 cup",
                },
                {
                    name: "Flour",
                    quantity: "2 cups",
                },
                {
                    name: "Milk",
                    quantity: "1 cup",
                },
            ],
            directions: [
                {
                    step: 1,
                    instructions: "Preheat the oven to 350°F (180°C).",
                },
                {
                    step: 2,
                    instructions: "In a large mixing bowl, combine the flour, sugar, and baking powder.",
                },
                {
                    step: 3,
                    instructions: "Add the eggs, milk, and vanilla extract to the dry ingredients. Mix until well combined.",
                },
                {
                    step: 4,
                    instructions: "Grease a baking pan and pour the batter into it evenly.",
                },
                {
                    step: 5,
                    instructions: "Bake in the preheated oven for 25-30 minutes or until a toothpick inserted into the center comes out clean.",
                },
                {
                    step: 6,
                    instructions: "Allow the cake to cool completely before frosting or serving.",
                },
                {
                    step: 7,
                    instructions: "Enjoy your delicious homemade cake!",
                },
            ],
        },
    },
    {
        id: 2,
        title: "Travel to somewhere new",
        author: "Bob",
        lastUpdated: dayjs().subtract(6, "days").format("DD/MM/YYYY"),
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        uri: require("../../assets/images/card3.jpg"),
        recipe: {
            prepTime: "10 mins",
            cookTime: "30 mins",
            totalTime: "40 mins",
            serving: 4,
            yield: "4 servings",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: "1 cup",
                },
                {
                    name: "Flour",
                    quantity: "2 cups",
                },
                {
                    name: "Milk",
                    quantity: "1 cup",
                },
            ],
            directions: [
                {
                    step: 1,
                    instructions: "Preheat the oven to 350°F (180°C).",
                },
                {
                    step: 2,
                    instructions: "In a large mixing bowl, combine the flour, sugar, and baking powder.",
                },
                {
                    step: 3,
                    instructions: "Add the eggs, milk, and vanilla extract to the dry ingredients. Mix until well combined.",
                },
                {
                    step: 4,
                    instructions: "Grease a baking pan and pour the batter into it evenly.",
                },
                {
                    step: 5,
                    instructions: "Bake in the preheated oven for 25-30 minutes or until a toothpick inserted into the center comes out clean.",
                },
                {
                    step: 6,
                    instructions: "Allow the cake to cool completely before frosting or serving.",
                },
                {
                    step: 7,
                    instructions: "Enjoy your delicious homemade cake!",
                },
            ],
        },
    },
    {
        id: 3,
        title: "Learn photography",
        author: "Joe",
        lastUpdated: dayjs().subtract(8, "days").format("DD/MM/YYYY"),
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        uri: require("../../assets/images/card4.jpg"),
        recipe: {
            prepTime: "10 mins",
            cookTime: "30 mins",
            totalTime: "40 mins",
            serving: 4,
            yield: "4 servings",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: "1 cup",
                },
                {
                    name: "Flour",
                    quantity: "2 cups",
                },
                {
                    name: "Milk",
                    quantity: "1 cup",
                },
            ],
            directions: [
                {
                    step: 1,
                    instructions: "Preheat the oven to 350°F (180°C).",
                },
                {
                    step: 2,
                    instructions: "In a large mixing bowl, combine the flour, sugar, and baking powder.",
                },
                {
                    step: 3,
                    instructions: "Add the eggs, milk, and vanilla extract to the dry ingredients. Mix until well combined.",
                },
                {
                    step: 4,
                    instructions: "Grease a baking pan and pour the batter into it evenly.",
                },
                {
                    step: 5,
                    instructions: "Bake in the preheated oven for 25-30 minutes or until a toothpick inserted into the center comes out clean.",
                },
                {
                    step: 6,
                    instructions: "Allow the cake to cool completely before frosting or serving.",
                },
                {
                    step: 7,
                    instructions: "Enjoy your delicious homemade cake!",
                },
            ],
        },
    },
];

const videoCardInfo = [
    {
        id: 0,
        title: "Top 10 Morning Exercises To Do At Home",
        description: `Don't let mornings put you in a bad mood! Make your day so much better by launching yourself off your bed and getting in to a full-on workout mode.

        Perform this early morning workout challenge and improve your health and mood for the day. Prep your body to burn calories for the entire day by exercising daily with this 20-min workout and prepare to lose weight in 3-4 weeks! 
        
        Don't start your day already dreading it before it even started! Get yourself off that bed and do this morning workout challenge! Let’s begin!❤️💪
        `,
        uri: {
            videoId: "PG2f3GF5RlI",
            link: "https://www.youtube.com/embed/PG2f3GF5RlI",
        },
        author: null,
        lastUpdated: null,
        recipe: null,
    },
    {
        id: 1,
        title: "20 min Fat Burning Workout for TOTAL BEGINNERS (Achievable, No Equipment)",
        description: `a 20 min fat burning, full body workout you can do at home without any equipment! A workout designed for TOTAL BEGINNERS! Wether you are just getting into fitness, or are getting back in the fitness game... this one is for you.
        #HomeWorkout #Fitness #BeginnerWorkout
        👉🏼 DOWNLOAD YOUR MADFIT APP FREE TRIAL HERE: https://madfit.app.link/e/store
        
        ⭐️ DO THIS WARM UP FIRST: http://bit.ly/2riv8T6
        ⭐️ APARTMENT FRIENDLY WARM UP:   
        
         • 5 MIN WARM UP FOR AT HOME WORKOUTS (N...  
        ⭐️ DO THIS COOL DOWN AFTER (5 min): https://bit.ly/3zywpCu
        
        👉🏼THE MAT I USE (Exercise 6X4): http://gorillamats.com?aff=19  (MADFIT10 for 10% off)
        
        ✘ I N S T A G R A M: @madfit.ig
        ✘ T W I T T E R: @maddielymburner
        ✘ F A C E B O O K: facebook.com/madfit.ig
        ✉ C O N T A C T (business inquiries): madfit95@gmail.com
        `,
        uri: {
            videoId: "IT94xC35u6k",
            link: "https://www.youtube.com/embed/IT94xC35u6k",
        },
        author: null,
        lastUpdated: null,
        recipe: null,
    },
    {
        id: 2,
        title: "7 ESSENTIAL STRETCHES YOU NEED TO DO DAILY! (12 min Stretch for Flexibility & Mobility)",
        description: `We all know how important stretching is! I wanted to put together some MUST DO stretches that you can throw into your everyday routine. This is a FULL BODY stretch and only takes about 12 minutes to complete! No equipment needed. #fitness #homeworkout #stretching 
            👉🏼 DOWNLOAD THE MADFIT APP HERE: https://madfit.app.link/e/store

            ⭐️ DO THIS WARM UP FIRST: shorturl.at/gsTX5
            ⭐️ APARTMENT FRIENDLY WARM UP:               
             • 5 MIN WARM UP FOR AT HOME WORKOUTS (N...  
            ⭐️ DO THIS COOL DOWN AFTER (5 min): shorturl.at/jswT3
        
            👉🏼THE MAT I USE (Exercise 6X4): http://gorillamats.com?aff=19  (MADFIT10 for 10% off)
            
            ✘ I N S T A G R A M: @madfit.ig
            ✘ T W I T T E R: @maddielymburner
            ✘ F A C E B O O K: facebook.com/madfit.ig
            ✉ C O N T A C T (business inquiries): madfit95@gmail.com`,
        uri: {
            videoId: "RKYhcPV2dbA",
            link: "https://www.youtube.com/embed/RKYhcPV2dbA",
        },
        author: null,
        lastUpdated: null,
        recipe: null,
    },
    {
        id: 3,
        title: "REAL YOGA 21st November bandages off!",
        description:
            "This is the 2nd day of me recording my REAL yoga practice RAW, UNEDITED and honest. These videos don't even have thumbnails!  I've had enough of chasing followers and views and after hitting 500k subscribers across my platforms I'm done with the fakeness of social media and editing videos.  It's time people saw what a NORMAL yoga practice and lifestyle looks like.  I may lose subscribers posting these maybe even get some hate, but already I feel like this is the right decision for me.  If you want to follow my journey subscribe and I'll see you tomorrow for day 3        ",
        videoId: "ONX5pnRsapo",
        uri: {
            videoId: "ONX5pnRsapo",
            link: "https://www.youtube.com/embed/ONX5pnRsapo",
        },
        author: null,
        lastUpdated: null,
        recipe: null,
    },
];

export { cardInfo, videoCardInfo };
