var UserType;
(function (UserType) {
    UserType["Admin"] = "Admin";
    UserType["Member"] = "Member";
    UserType["Guest"] = "Guest";
})(UserType || (UserType = {}));
var User = /** @class */ (function () {
    function User() {
        var _a;
        this.userId = Number(prompt("Entrez l'ID de l'utilisateur :"));
        this.firstName = prompt("Entrez le prénom :") || "";
        this.lastName = prompt("Entrez le nom :") || "";
        this.age = Number(prompt("Entrez l'âge :"));
        var typeInput = (_a = prompt("Entrez le type d'utilisateur (Admin / Member / Guest) :")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        switch (typeInput) {
            case "admin":
                this.type = UserType.Admin;
                break;
            case "member":
                this.type = UserType.Member;
                break;
            default:
                this.type = UserType.Guest;
        }
    }
    User.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.greetUser = function () {
        var message;
        switch (this.type) {
            case UserType.Admin:
                message = "Bienvenue administrateur ".concat(this.fullName(), " ! Vous avez un acc\u00E8s complet.");
                break;
            case UserType.Member:
                message = "Bienvenue cher membre ".concat(this.fullName(), " !");
                break;
            case UserType.Guest:
                message = "Bienvenue invit\u00E9 ".concat(this.fullName(), " ! Vous avez un acc\u00E8s limit\u00E9.");
                break;
        }
        console.log(message);
    };
    return User;
}());
// Exemple d’utilisation :
var user1 = new User();
user1.greetUser();
