const button = document.querySelector(".gomb");
        const brutto = document.getElementById("brutto");
        const netto = document.getElementById("netto");
        const szjaCheck = document.querySelector("input[type='checkbox']");

    button.addEventListener("click", () => {
        const bruttoValue = parseFloat(brutto.value);

            function formatNumberWithSpaces(number) {

            return number.toLocaleString('fr-FR'); 
            }

        if (isNaN(bruttoValue)) return;

        if (szjaCheck.checked) {

            if (bruttoValue <=  576601) {
                netto.value = (bruttoValue * 0.815).toFixed(2);
            } else {
                netto.value = (bruttoValue * 0.76).toFixed(2);
            }

        } else {
            netto.value = (bruttoValue * 0.665).toFixed(2);
        }
        
        
    });