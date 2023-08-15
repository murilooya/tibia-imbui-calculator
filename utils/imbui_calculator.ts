interface Imbuiment {
    basic: number,
    intricate: number,
    powerful: number
}

const vamp_imbui : Imbuiment = {
    basic: 25,          //Vampire Teeth
    intricate: 15,      //Bloody Pincers
    powerful: 5         //Piece of Dead Brain
}

const void_imbui : Imbuiment = {
    basic: 25,         //Rope Belt
    intricate: 25,     //Silencer Claws
    powerful: 5        //Some Grimeleech Wings
}

const strike_imbui : Imbuiment = {
    basic: 20,         //Protective Charm
    intricate: 25,     //Sabretooth
    powerful: 5        //Vexclaw Talon
}

const gold_token : Imbuiment = {
    basic: 2,
    intricate: 4,
    powerful: 6
}

function get_imbue_quantity (imbue_type : string) {
    switch (imbue_type) {
        case ("vamp"):
            return vamp_imbui;
        case ("void"):
            return void_imbui;
        case ("strike"):
            return strike_imbui;
    }
}

function calculate_imbuiment(prices : Imbuiment, gt_price : number, imbue_type : string) {
    const quantity : Imbuiment = get_imbue_quantity(imbue_type)
}