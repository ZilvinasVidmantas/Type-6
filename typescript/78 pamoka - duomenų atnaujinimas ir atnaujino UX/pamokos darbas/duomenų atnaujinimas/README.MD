# 14 pamoka - Duomenų kūrimas

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaiga, yra šios pamokos pradžia.
Jūsų pamokos tikslas įgalinti duomenų kūrimą - naujos mašnos kūrimą

## Eiga
1. Sukurkite klasę-komponentą {TextField}
  1. Sukurkite reikalingus įvesties laukus kurti įvesties laukui:
    * labelText <label>{labelText}</label>
    * name - <input name="{name}">
    * value? - <input value="{value}"/> 
  2. Sukurkite logiką kurti unikaliam id, kurį naudosite <label for="{id}">... atributui naudojant statinį skaitiklį
  3. Įgalinkite galimybę atnaujinti komponentą
    1. Struktūrizavimo veiksmus atlikite metode {initialize}
    2. Atvaizdavimo veiksmus, kurie naudoja props'us atlikite meode {renderView}
    3. Sukurkite metodą {updateProps} kuriame atnaujinsite props'us ir po atnaujinimo
    iškvieskite metodą {renderView}

Reikia panaudoti jau kurtą {SelectField} komponentą, kad panaudoti keliose aplikacijos vietose
2. Papildykite klasę-komponenta SelectField
  1. Papildykite/pakeiskite props'us
    * ~ onChange? - EventListener'į uždėkite tik jei egzistuoja onChange prop'sas
    * + name? - <select name="{name}"></select>
    * + value? - uždėkite sutampančiam pagal reikšmę <option>...</option> elementui atributą "selected" 
  2. Sukurkite logiką kurti unikaliam id, kurį naudosite <label for="{id}">... atributui naudojant statinį skaitiklį
  3. Įgalinkite galimybę atnaujinti komponentą
    1. Struktūrizavimo veiksmus atlikite metode {initialize}
    2. Atvaizdavimo veiksmus, kurie naudoja props'us atlikite meode {renderView}
    3. Sukurkite metodą {updateProps} kuriame atnaujinsite props'us ir po atnaujinimo
    iškvieskite metodą {renderView}

3. Sukurkite naują klasę-komponentą {CarForm}
  1. Sukurkite reikalingus klasės savybes kurti naujai mašinai
    * Markė - SelectField
    * Modelis - SelectField
    * Kainai - TextField
    * Metai - TextField
  2. Sukurkite props'us:
    1. title - formos pavadinimas
    2. values - pradinės reikšmės:
        * brand: string,
        * model: string,
        * price: string,
        * year: string,
    3. submitBtnText - tekstas formos submit mygtuke
  3. Sukurkite konstruktorių, jog būtų galima priimti props'us, ir juos išsaugoti ir sukurti pagrindines formos savybes.
  4. Sukurkite metodą {initialize} kuriame sudarysite pagrindinę komponento atvaizdavimo struktūrą
  5. Sukurkite metodą {renderView} ir jame panaudokite props'us įrašyti reikmės į komponento savybes/sudedamasias dalis

4. App kompnente pridėkite CarForm objektą, ir atvaizduokite jį šalia lentelės

5. Įgalinkite naujos mašinos sukūrimą
  1. CarForm komponente įgalinkite 'dependency injection' principą
    1. Uždėkite formai įvykio klausiklį ant 'submit' įvykio
    2. Priimkite naują prop'są {onSubmit}, ir kvieskite šią funkciją pas'submit'inus formą
    3. Pakeiskite {onSubmit} tipą, jog jis priimtų formos reikšmes objektu, ir kviečiant {onSubmit} funkciją perduokite iš formos nuskaitytas reikšmes
  2. {CarsCollection} duomenų konteinerinėje klasėje:
    1. Sukurkite metodą {add}pridėti naują mašiną
  3. App komponente:
    1. Sukurkite funkciją {handleCreateCar} ir perduokite ją CarForm komponentui per props'us
    2. {App.handleCreateCar} metode, pridėkite mašiną naudojant {CarsCollection.add} metodą ir po pridėjimo kvieskite metodą {App.renderView}
    
