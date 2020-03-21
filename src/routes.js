module.exports = app => {
    app.get("/", (req, res) => {
        res.send("Welcome to my API");
    });

    app.get("/training-programs", function (req, res) {
        return res.json({
            success: true,
            data: [
                {
                    name: "Python it",
                    duration: "12 days",
                    development_stack: "Django",
                    price: 10
                },
                {
                    name: "Mine that data",
                    duration: "24 days",
                    development_stack: "MEAN",
                    price: 10
                },
                {
                    name: "Flutter Away",
                    duration: "24 days",
                    development_stack: "LAMP",
                    price: 10
                },
                {
                    name: "C your way through",
                    duration: "24 days",
                    development_stack: "Ruby on Rails",
                    price: 10
                },
            ]
        })
    });
};
