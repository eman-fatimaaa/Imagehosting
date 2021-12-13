

const emailRules = [
    (v) => !!v || "Email Address is required",
    (v) =>
        /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/.test(v) || "E-mail must be valid",
];
const nameRules = [
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 12) || "Name must be less than 12 characters",
];
const passwordRules = [(v) => !!v || "Password is required",]
//(v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || "Minimum eight characters, at least one letter and one number"];



const ageRules = [
    (v) => !!v || "Age is required",
    (v) =>
        /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/.test(v) ||
        " Age must be above 17",
];
const imageRules = [
    (v) => !!v || "Image is required",

];



export { emailRules, nameRules, passwordRules, ageRules, imageRules }