var tip_calculator_app = (function () {
    let bill = 0;
    let tip = 0;
    let people = 0;

    return {        
        onBillChanged: function(updated_bill) {
            bill = updated_bill;
            this.fireChange();
        },

        onTipChanged: function(updated_tip) {
            tip = updated_tip;
            this.fireChange();
        },

        onPeopleChanged: function(updated_people) {
            people = updated_people
            this.fireChange();
        },

        fireChange: function() {
            results = this.calculateResults(bill, tip, people);
            this.updateElements(results.tip_amount, results.total_amount);
        },

        calculateResults: function(current_bill, current_tip, current_persons) {
            if (current_bill == 0 || current_tip == 0 || current_persons == 0) {
                return {
                    tip_amount: (0).toFixed(2),
                    total_amount: (0).toFixed(2)
                }
            }

            tip_amount = (current_bill * (current_tip / 100)) / current_persons;
            total_amount = (current_bill / current_persons) + tip_amount;
            
            return {
                tip_amount: tip_amount.toFixed(2),
                total_amount: total_amount.toFixed(2)
            }
        },

        updateElements: function(tip_amount, total_amount) {
            document.getElementById("tip-amount").innerText = tip_amount;
            document.getElementById("total-amount").innerText = total_amount;
        },

        reset: function() {
            bill = 0;
            tip = 0;
            people = 0;

            this.fireChange();
        }
    }
}());