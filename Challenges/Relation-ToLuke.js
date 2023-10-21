function relationToLuke(person) {
    person = person.trim(person);
    switch (person) {
        case "Darth Vader":
            return "Luke, I am your father.";
        case "Leta":
            return "Luke, I am your sister";
        case "Han":
            return "Luke, I am your brother-in-law";
        case "R2D2":
            return "Luke, I am your droid";
        default:
            return "unknuown";
    }
}
console.log(relationToLuke("Darth Vader"))
console.log(relationToLuke("Leta"))
console.log(relationToLuke("A"))
console.log(relationToLuke("Han"))
console.log(relationToLuke("R2D2"))