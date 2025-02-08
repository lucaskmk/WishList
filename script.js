const gifts = [
    { name: "algum monitor de 244hz", price: 1000.00, link: "https://www.terabyteshop.com.br/produto/27048/monitor-gamer-duex-27-pol-full-hd-ips-240hz-1ms-freesync-hdmidp-dx270ghq-240hz?gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4jsM9TuBjhFxKEQFVJbCXNXg_nCRAl5AGBHdSmMvvfM1XQSNY78PRRoCNMcQAvD_BwE" },
    { name: "water coller sem display de 1 fan", price: 459.99, link: "https://www.google.com/shopping/product/16119629419018271847?q=water+cooler+croshair&client=firefox-b-d&sca_esv=6ab7d84a2dba9de5&biw=1920&bih=887&sxsrf=AHTn8zrZ7DnGkyRU-JtjPGQ1FjbZK6jb_w:1739039157996&uact=5&oq=water+cooler+croshair&gs_lp=Egtwcm9kdWN0cy1jYyIVd2F0ZXIgY29vbGVyIGNyb3NoYWlyMgcQABiABBgNMgoQABiABBjWBRgNMgoQABiABBjWBRgNMgoQABiABBjWBRgNMgoQABiABBjWBRgNMgoQABiABBjWBRgNMgoQABiABBjWBRgNMgkQABjWBRgNGB4yCRAAGNYFGA0YHjIJEAAY1gUYDRgeSPshUNUHWM4fcAB4AJABAJgBfqABiQmqAQMxLjm4AQPIAQD4AQGYAgWgAtUEwgIEECMYJ8ICChAAGIAEGEMYigXCAgUQABiABMICCxAAGAUY1gUYDRgewgINEAAY1gUYCBgKGA0YHsICCxAAGNYFGAgYDRgemAMAiAYBkgcDMC41oAelIQ&sclient=products-cc&prds=eto:8966193702124139603_0,pid:16544529425864868412,rsk:PC_12753608102921895046&sa=X&ved=0ahUKEwia0YLp2bSLAxWCkZUCHeKvNAUQ8wIIxA0" },
    { name: "water coller com display", price: 1999.90, link: "https://www.terabyteshop.com.br/produto/31552/water-cooler-lian-li-galahad-ii-lcd-sl-inf-360mm-argb-com-display-intelamd-preto-ga2alcd36inb-black" },
    { name: "lego dnd", price: 3500.00, link: "https://www.legostore.com.br/21348-lego-ideias-dungeos-dragons-conto-do-dragao-vermelho/p?idsku=2004438&gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4kR3xUBHJIJsr74DdUIsgM5jD9Zc6jSlSqKDHokR_ZgWQTHSGUsPgxoC5jEQAvD_BwE" },
    { name: "lego zelda", price: 1999.90, link: "https://www.legostore.com.br/77092-lego-a-lenda-de-zelda-arvore-sagrada/p?idsku=2004599&gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4m6fmOfcxomG26EkG90M5wm8xd-eMA9DkI_rvZwWMf96RmYSv37SyRoC1zYQAvD_BwE" },
    { name: "lego panda", price: 379.99, link: "https://www.legostore.com.br/31165-lego-creator-3em1-animais-selvagens-familia-panda/p?idsku=2004760&gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4pV8_uaFdPhCbSMQqwMz2E-dxC_OVTVFSC16vPQxqqIqNVx1LusAAhoC6RwQAvD_BwE" },
    { name: "mouse sem fio ", price: 509.99, link: "https://www.amazon.com.br/Mouse-Gamer-Logitech-G502-LIGHTSPEED/dp/B07DCSZV9Y/ref=asc_df_B07DCSZV9Y/?tag=googleshopp00-20&linkCode=df0&hvadid=709964502959&hvpos=&hvnetw=g&hvrand=15245884460566927862&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196018&hvtargid=pla-843109949264&psc=1&mcid=8a140253c7ae3b97bd0c27bad1c06e42&gad_source=1" },
    {name: 'Porta Chá de Bambu', price: 78.89, link: "https://www.amazon.com.br/s?k=guardar+cha&i=kitchen&__mk_pt_BR=ÅMÅŽÕÑ&crid=PD18BF6GCQXJ&sprefix=guardar+ch%2Ckitchen%2C222&ref=nb_sb_noss_2"},
    {name: 'Porta Chá com 6 gavetas, preto ', price: 86.52, link: "https://www.amazon.com.br/Mind-Reader-Porta-saco-gavetas-preto/dp/B017DFZCE8/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PD18BF6GCQXJ&dib=eyJ2IjoiMSJ9.7WD_JDl0JoKBx-dhg-dA0EEHgOWqRGBLiVNhiK3MNQKB0qdfLZEnx3mItPdnczRYtAlHNHxUdHMjE4_FgWkqFhygfV1aaa63-csEq15YmAxHHwkrTQ3Uu2JFF36KHDRi3PGCDXQLPP9SwZqGToeFrcNqA-laNZS_9HPoGjLhJXISdPzgOQ_4jczjuGpafC-VXWS4B_9tQoAFlNvvA4Ujyv41aj5xCHkepRmVMRZNpeU.MulsAsFf_FriQJ_Zp5HXzRRsUD_mPAJ3Dc_dmQX6jBg&dib_tag=se&keywords=guardar%2Bch%C3%A1&qid=1739039861&s=kitchen&sprefix=guardar%2Bch%2Ckitchen%2C222&sr=1-7&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1"},
    { name:"Mochila com muito bolso - eu to usando uma dentro de outra kkkk" , price: 489.00, link: "https://bongosto.com.br/product/mochila-de-viagem-grande-impermeavel/?variant=12034&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&utm_source=google&utm_medium=cpc&utm_campaign=pmax_mochila_grande_viagem&gclid=Cj0KCQjwnMWkBhDLARIsAHBOftouWYnXYeZHZVeOe2v8rHXmUY6BtUthIkY1L00eoKXXzmlUEbkC9UcaAjXVEALw_wcB"}
];

function displayGifts(gifts) {
    const giftList = document.getElementById('gift-list');
    giftList.innerHTML = '';
    gifts.forEach(gift => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${gift.link}" target="_blank">${gift.name}</a> - $${gift.price}`;
        giftList.appendChild(li);
    });
}

function sortByPrice() {
    const sortedGifts = gifts.slice().sort((a, b) => a.price - b.price);
    displayGifts(sortedGifts);
}

function sortByName() {
    const sortedGifts = gifts.slice().sort((a, b) => a.name.localeCompare(b.name));
    displayGifts(sortedGifts);
}


// Initial display
displayGifts(gifts);