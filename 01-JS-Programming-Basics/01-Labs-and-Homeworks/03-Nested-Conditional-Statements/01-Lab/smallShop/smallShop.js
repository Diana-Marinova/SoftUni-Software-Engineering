function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let quatity = Number(input[2]);
    let price;

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    price = 0.5;
                    break;
                case "water":
                    price = 0.8;
                    break;
                case "beer":
                    price = 1.2;
                    break;
                case "sweets":
                    price = 1.45;
                    break;
                case "peanuts":
                    price = 1.6;
                    break;
            }
            break;

        case "Plovdiv":
            switch (product) {
                case "coffee":
                    price = 0.4;
                    break;
                case "water":
                    price = 0.7;
                    break;
                case "beer":
                    price = 1.15;
                    break;
                case "sweets":
                    price = 1.3;
                    break;
                case "peanuts":
                    price = 1.5;
                    break;
            }
            break;

        case "Varna":
            switch (product) {
                case "coffee":
                    price = 0.45;
                    break;
                case "water":
                    price = 0.7;
                    break;
                case "beer":
                    price = 1.1;
                    break;
                case "sweets":
                    price = 1.35;
                    break;
                case "peanuts":
                    price = 1.55;
                    break;
            }
            break;

    }

    console.log(quatity * price);
}

smallShop(["sweets",
    "Sofia",
    "2.23"]);

