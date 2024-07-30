function myFunction() {
  var input, filter, div, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myUL");
  div = div.getElementsByClassName("cardMenu");
  for (i = 0; i < div.length; i++) {
      a = div[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
  }
}

let methodbuy = '';
let info1 = '';
let info2 = '';


$("#dis1").hide();
$("#dis2").hide();
$("#dis3").hide();
$("#dis4").hide();
$("#dis5").hide();
$("#dis6").hide();
$("#dis7").hide();
$("#dis8").hide();
$("#dis9").hide();
$("#dis10").hide();
$("#dis11").hide();
$("#dis12").hide();
$("#dis13").hide();
$("#dis14").hide();
$("#dis15").hide();
$("#dis16").hide();
$("#dis17").hide();
$("#dis18").hide();
$("#dis19").hide();
$("#dis20").hide();


let taxValue = 0;
let quantity1 = 0;
let quantity2 = 0;
let quantity3 = 0;
let quantity4 = 0;
let quantity5 = 0;
let quantity6 = 0;
let quantity7 = 0;
let quantity8 = 0;
let quantity9 = 0;
let quantity10 = 0;
let quantity11 = 0;
let quantity12 = 0;
let quantity13 = 0;
let quantity14 = 0;
let quantity15 = 0;
let quantity16 = 0;
let quantity17 = 0;
let quantity18 = 0;
let quantity19 = 0;
let quantity20 = 0;
let pajak = 0.1;

$(document).ready(function () {
  $("#clickableImage").click(function () {
    $("#dis1").show();
    var hargaText = $('#harga').text();
    info1 = $('#infoItm').text();  // Declare info1 globally
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
      $("#displayInfo").text(info1);
      $("#displayValue").text("Price: Rp." + integerValue);
      taxValue += integerValue;
     
      pajakTotal = pajak * taxValue + taxValue;
      quantity1++;
      $("#tax").text(pajakTotal);
      $("#quantity").text(quantity1);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage2").click(function () {
    $("#dis2").show();
    var hargaText = $('#harga2').text();
    info2 = $('#infoItm2').text();  // Declare info2 globally
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
      $("#displayInfo2").text(info2);
      $("#displayValue2").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity2++;
      $("#tax").text(pajakTotal);
      $("#quantity2").text(quantity2);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage3").click(function () {
    $("#dis3").show();
    var hargaText = $('#harga3').text();
    info3 = $('#infoItm3').text();  // Declare info3 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo3").text(info3);
      $("#displayValue3").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity3++;
      $("#tax").text(pajakTotal);
      $("#quantity3").text(quantity3);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage4").click(function () {
    $("#dis4").show();
    var hargaText = $('#harga4').text();
    info4 = $('#infoItm4').text();  // Declare info4 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo4").text(info4);
      $("#displayValue4").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity4++;
      $("#tax").text(pajakTotal);
      $("#quantity4").text(quantity4);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage5").click(function () {
    $("#dis5").show();
    var hargaText = $('#harga5').text();
    info5 = $('#infoItm5').text();  // Declare info5 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo5").text(info5);
      $("#displayValue5").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity5++;
      $("#tax").text(pajakTotal);
      $("#quantity5").text(quantity5);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage6").click(function () {
    $("#dis6").show();
    var hargaText = $('#harga6').text();
    info6 = $('#infoItm6').text();  // Declare info6 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo6").text(info6);
      $("#displayValue6").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity6++;
      $("#tax").text(pajakTotal);
      $("#quantity6").text(quantity6);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage7").click(function () {
    $("#dis7").show();
    var hargaText = $('#harga7').text();
    info7 = $('#infoItm7').text();  // Declare info7 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo7").text(info7);
      $("#displayValue7").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity7++;
      $("#tax").text(pajakTotal);
      $("#quantity7").text(quantity7);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage8").click(function () {
    $("#dis8").show();
    var hargaText = $('#harga8').text();
    info8 = $('#infoItm8').text();  // Declare info8 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo8").text(info8);
      $("#displayValue8").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity8++;
      $("#tax").text(pajakTotal);
      $("#quantity8").text(quantity8);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage9").click(function () {
    $("#dis9").show();
    var hargaText = $('#harga9').text();
    info9 = $('#infoItm9').text();  // Declare info9 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo9").text(info9);
      $("#displayValue9").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity9++;
      $("#tax").text(pajakTotal);
      $("#quantity9").text(quantity9);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage10").click(function () {
    $("#dis10").show();
    var hargaText = $('#harga10').text();
    info10 = $('#infoItm10').text();  // Declare info10 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo10").text(info10);
      $("#displayValue10").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity10++;
      $("#tax").text(pajakTotal);
      $("#quantity10").text(quantity10);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage11").click(function () {
    $("#dis11").show();
    var hargaText = $('#harga11').text();
    info11 = $('#infoItm11').text();  // Declare info11 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo11").text(info11);
      $("#displayValue11").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity11++;
      $("#tax").text(pajakTotal);
      $("#quantity11").text(quantity11);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage12").click(function () {
    $("#dis12").show();
    var hargaText = $('#harga12').text();
    info12 = $('#infoItm12').text();  // Declare info12 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo12").text(info12);
      $("#displayValue12").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity12++;
      $("#tax").text(pajakTotal);
      $("#quantity12").text(quantity12);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage13").click(function () {
    $("#dis13").show();
    var hargaText = $('#harga13').text();
    info13 = $('#infoItm13').text();  // Declare info13 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo13").text(info13);
      $("#displayValue13").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity13++;
      $("#tax").text(pajakTotal);
      $("#quantity13").text(quantity13);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage14").click(function () {
    $("#dis14").show();
    var hargaText = $('#harga14').text();
    info14 = $('#infoItm14').text();  // Declare info14 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo14").text(info14);
      $("#displayValue14").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity14++;
      $("#tax").text(pajakTotal);
      $("#quantity14").text(quantity14);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage15").click(function () {
    $("#dis15").show();
    var hargaText = $('#harga15').text();
    info15 = $('#infoItm15').text();  // Declare info15 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo15").text(info15);
      $("#displayValue15").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity15++;
      $("#tax").text(pajakTotal);
      $("#quantity15").text(quantity15);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage16").click(function () {
    $("#dis16").show();
    var hargaText = $('#harga16').text();
    info16 = $('#infoItm16').text();  // Declare info16 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo16").text(info16);
      $("#displayValue16").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity16++;
      $("#tax").text(pajakTotal);
      $("#quantity16").text(quantity16);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage17").click(function () {
    $("#dis17").show();
    var hargaText = $('#harga17').text();
    info17 = $('#infoItm17').text();  // Declare info17 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo17").text(info17);
      $("#displayValue17").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity17++;
      $("#tax").text(pajakTotal);
      $("#quantity17").text(quantity17);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  $("#clickableImage18").click(function () {
    $("#dis18").show();
    var hargaText = $('#harga18').text();
    info18 = $('#infoItm18').text();  // Declare info18 globally
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo18").text(info18);
      $("#displayValue18").text("Price: Rp." + integerValue);
      taxValue += integerValue;
      
      pajakTotal = pajak * taxValue + taxValue;
      quantity18++;
      $("#tax").text(pajakTotal);
      $("#quantity18").text(quantity18);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

$("#clickableImage19").click(function () {
  $("#dis19").show();
  var hargaText = $('#harga19').text();
  info19 = $('#infoItm19').text();  // Declare info19 globally
  let integerValue = parseInt(hargaText);

  if (!isNaN(integerValue)) {
    $("#displayInfo19").text(info19);
    $("#displayValue19").text("Price: Rp." + integerValue);
    taxValue += integerValue;
    
    pajakTotal = pajak * taxValue + taxValue;
    quantity19++;
    $("#tax").text(pajakTotal);
    $("#quantity19").text(quantity19);
  } else {
    console.log("Conversion to Integer Failed");
  }
});

$("#clickableImage20").click(function () {
  $("#dis20").show();
  var hargaText = $('#harga20').text();
  info20 = $('#infoItm20').text();  // Declare info20 globally
  let integerValue = parseInt(hargaText);

  if (!isNaN(integerValue)) {
    $("#displayInfo20").text(info20);
    $("#displayValue20").text("Price: Rp." + integerValue);
    taxValue += integerValue;
    
    pajakTotal = pajak * taxValue + taxValue;
    quantity20++;
    $("#tax").text(pajakTotal);
    $("#quantity20").text(quantity20);
  } else {
    console.log("Conversion to Integer Failed");
  }
});

  $("#exportToTxt").click(function () {
    changeText($("#dropdownButton").text());
    exportToTxt();
  });
});

$("#rem1").click(function () {
  let itemPrice = parseInt($('#harga').text());
  taxValue -= itemPrice;
  quantity1--;
  if (quantity1 === 0) {
    $("#dis1").hide();
  }
  pajakTotal = pajak * taxValue + taxValue;
  $("#tax").text(pajakTotal);
  $("#quantity").text(quantity1);
});

$("#rem2").click(function () {
  let itemPrice = parseInt($('#harga2').text());
  taxValue -= itemPrice;
  quantity2--;
  if (quantity2 === 0) {
    $("#dis2").hide();
  }
  pajakTotal = pajak * taxValue + taxValue;
  $("#tax").text(pajakTotal);
  $("#quantity2").text(quantity2);
});

$("#rem3").click(function () {
  let itemPrice = parseInt($('#harga3').text());
  taxValue -= itemPrice;
  quantity3--;
  if (quantity3 === 0) {
    $("#dis3").hide();
  }
  pajakTotal = pajak * taxValue + taxValue;
  $("#tax").text(pajakTotal);
  $("#quantity3").text(quantity3);
});

$("#rem4").click(function () {
    let itemPrice = parseInt($('#harga4').text());
    taxValue -= itemPrice;
    quantity4--;
    if (quantity4 === 0) {
      $("#dis4").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity4").text(quantity4);
  });

  $("#rem5").click(function () {
    let itemPrice = parseInt($('#harga5').text());
    taxValue -= itemPrice;
    quantity5--;
    if (quantity5 === 0) {
      $("#dis5").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity5").text(quantity5);
  });

  $("#rem6").click(function () {
    let itemPrice = parseInt($('#harga6').text());
    taxValue -= itemPrice;
    quantity6--;
    if (quantity6 === 0) {
      $("#dis6").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity6").text(quantity6);
  });

  $("#rem7").click(function () {
    let itemPrice = parseInt($('#harga7').text());
    taxValue -= itemPrice;
    quantity7--;
    if (quantity7 === 0) {
      $("#dis7").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity7").text(quantity7);
  });

  $("#rem8").click(function () {
    let itemPrice = parseInt($('#harga8').text());
    taxValue -= itemPrice;
    quantity8--;
    if (quantity8 === 0) {
      $("#dis8").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity8").text(quantity8);
  });

  $("#rem9").click(function () {
    let itemPrice = parseInt($('#harga9').text());
    taxValue -= itemPrice;
    quantity9--;
    if (quantity9 === 0) {
      $("#dis9").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity9").text(quantity9);
  });

  $("#rem10").click(function () {
    let itemPrice = parseInt($('#harga10').text());
    taxValue -= itemPrice;
    quantity10--;
    if (quantity10 === 0) {
      $("#dis10").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity10").text(quantity10);
  });

  $("#rem11").click(function () {
    let itemPrice = parseInt($('#harga11').text());
    taxValue -= itemPrice;
    quantity11--;
    if (quantity11 === 0) {
      $("#dis11").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity11").text(quantity11);
  });
  
  $("#rem12").click(function () {
    let itemPrice = parseInt($('#harga12').text());
    taxValue -= itemPrice;
    quantity12--;
    if (quantity12 === 0) {
      $("#dis12").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity12").text(quantity12);
  });
  
  $("#rem13").click(function () {
    let itemPrice = parseInt($('#harga13').text());
    taxValue -= itemPrice;
    quantity13--;
    if (quantity13 === 0) {
      $("#dis13").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity13").text(quantity13);
  });
  
  $("#rem14").click(function () {
    let itemPrice = parseInt($('#harga14').text());
    taxValue -= itemPrice;
    quantity14--;
    if (quantity14 === 0) {
      $("#dis14").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity14").text(quantity14);
  });

  $("#rem15").click(function () {
    let itemPrice = parseInt($('#harga15').text());
    taxValue -= itemPrice;
    quantity15--;
    if (quantity15 === 0) {
      $("#dis15").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity15").text(quantity15);
  });

  $("#rem16").click(function () {
    let itemPrice = parseInt($('#harga16').text());
    taxValue -= itemPrice;
    quantity16--;
    if (quantity16 === 0) {
      $("#dis16").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity16").text(quantity16);
  });
  
  $("#rem17").click(function () {
    let itemPrice = parseInt($('#harga17').text());
    taxValue -= itemPrice;
    quantity17--;
    if (quantity17 === 0) {
      $("#dis17").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity17").text(quantity17);
  });
  
  $("#rem18").click(function () {
    let itemPrice = parseInt($('#harga18').text());
    taxValue -= itemPrice;
    quantity18--;
    if (quantity18 === 0) {
      $("#dis18").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity18").text(quantity18);
  });
  
  $("#rem19").click(function () {
    let itemPrice = parseInt($('#harga19').text());
    taxValue -= itemPrice;
    quantity19--;
    if (quantity19 === 0) {
      $("#dis19").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity19").text(quantity19);
  });
  
  $("#rem20").click(function () {
    let itemPrice = parseInt($('#harga20').text());
    taxValue -= itemPrice;
    quantity20--;
    if (quantity20 === 0) {
      $("#dis20").hide();
    }
    pajakTotal = pajak * taxValue + taxValue;
    $("#tax").text(pajakTotal);
    $("#quantity20").text(quantity20);
  });  

function changeText(option) {
  $("#dropdownButton").text(option);
  methodbuy = option;
}

function exportToTxt() {
  if (methodbuy == 'Select Buy Method') {
    alert("Pilih Metode pembelian");
  } else {
    let txtContent = `STARBHAK-MARKET\n===========================\n`;

    if (quantity1 > 0) {
      txtContent += `${info1}: ${quantity1}\n`;
    }
    if (quantity2 > 0) {
      txtContent += `${info2}: ${quantity2}\n`;
    }
    if (quantity3 > 0) {
      txtContent += `${info3}: ${quantity3}\n`;
    }
    if (quantity4 > 0) {
      txtContent += `${info4}: ${quantity4}\n`;
    }
    if (quantity5 > 0) {
      txtContent += `${info5}: ${quantity5}\n`;
    }
    if (quantity6 > 0) {
      txtContent += `${info6}: ${quantity6}\n`;
    }
    if (quantity7 > 0) {
      txtContent += `${info7}: ${quantity7}\n`;
    }
    if (quantity8 > 0) {
      txtContent += `${info8}: ${quantity8}\n`;
    }
    if (quantity9 > 0) {
      txtContent += `${info9}: ${quantity9}\n`;
    }
    if (quantity10 > 0) {
      txtContent += `${info10}: ${quantity10}\n`;
    }
    if (quantity11 > 0) {
      txtContent += `${info11}: ${quantity11}\n`;
    }
    if (quantity12 > 0) {
      txtContent += `${info12}: ${quantity12}\n`;
    }
    if (quantity13 > 0) {
      txtContent += `${info13}: ${quantity13}\n`;
    }
    if (quantity14 > 0) {
      txtContent += `${info14}: ${quantity14}\n`;
    }
    if (quantity15 > 0) {
      txtContent += `${info15}: ${quantity15}\n`;
    }
    if (quantity16 > 0) {
      txtContent += `${info16}: ${quantity16}\n`;
    }
    if (quantity17 > 0) {
      txtContent += `${info17}: ${quantity17}\n`;
    }
    if (quantity18 > 0) {
      txtContent += `${info18}: ${quantity18}\n`;
    }
    if (quantity19 > 0) {
      txtContent += `${info19}: ${quantity19}\n`;
    }
    if (quantity20 > 0) {
      txtContent += `${info20}: ${quantity20}\n`;
    }

    if (quantity1 > 0 || quantity2 > 0 || quantity3 > 0 || quantity4 > 0 || quantity5 > 0 ||
        quantity6 > 0 || quantity7 > 0 || quantity8 > 0 || quantity9 > 0 || quantity10 > 0 ||
        quantity11 > 0 || quantity12 > 0 || quantity13 > 0 || quantity14 > 0 || quantity15 > 0 ||
        quantity16 > 0 || quantity17 > 0 || quantity18 > 0 || quantity19 > 0 || quantity20 > 0) {
      txtContent += `Tax: 10%\nTotal Amount: Rp. ${pajak * taxValue + taxValue}\nMethod: ${methodbuy}\n\nCashier: Mang. Ea\n===========================\nEnjoy Your Meal !`;

      const blob = new Blob([txtContent], { type: 'text/plain' });
      const downloadLink = document.getElementById('downloadTxtLink');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'invoice.txt';
      downloadLink.click();
    }
  }
}