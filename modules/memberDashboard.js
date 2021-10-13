console.log("ok")

$("#memberPersonalInformationEdit").on('click', function () {
  var data = $('#formData').serializeArray()
  JSONData = serializeToJSON(data)
  console.log(data)
  console.log(JSONData) // html務必加註name屬性，不然引擎抓不到資料

  $.ajax({
    url: "/dashboard/edit",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSONData,
    success: function (res) {
      var res = JSON.parse(res)
      //後端會封裝一個response class，預先寫好執行No.
      if (res.errno === 1) {
        alert("編輯成功!")
      } else if (res.errno === 0) {
        alert("新增失敗!")
      }
    },
    error: function () {
      alert("系統錯誤!")
    }
  })

  // 序列化轉JSON
  function serializeToJSON(data) {
    var values = {};
    for (index in data) {
      values[data[index].name] = data[index].value;
    }
    return JSON.stringify(values)
  }


})