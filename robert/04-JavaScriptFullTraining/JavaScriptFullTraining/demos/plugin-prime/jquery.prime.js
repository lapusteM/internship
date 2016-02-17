(function($) {
    $.fn.prime = function(userOptions) {
        var config = {
            number : 3
        }

        config = $.extend(config, userOptions);

        function isPrime(n) {
            var num = parseInt(n),
                p;

            if (isNaN(num) || num < 0) {
                return (n + " is not a valid number! Try again!");
            }

            if(num.toString().length > 5) {
                return (n + " is too large! Try something with a maximum of 5 digits!");
            }

            if (num == 1) {
                return ("1 is not prime by definition!");
            }

            if (num == 0) {
                return ("0 is not a valid number.");
            }

            if (num == 2) {
                return ("2 is a prime number!");
            }

            for (var i=2; i<num; i++) {
                if (num % i == 0) {
                    p = true;
                    return (num + " is not prime. It is divisible by " + i + ".");
                }

                if (num % i != 0) p = false;
            }

            if (!p) return (num + " is prime!");
        }

        this.val(isPrime(config.number));

        return this;
    }
})(jQuery);