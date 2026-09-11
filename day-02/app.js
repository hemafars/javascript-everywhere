console.log("5" + 3);

//## 53

console.log("5" - 3);
//يجمع القيمتين

//## 2

console.log(5 + true);
//true = 1

//## 6

console.log("5" === 5);
//تقارن القيمة والنوع

//## false

console.log("5" == 5);
//تقارن القيمة فقط

//## true

console.log(typeof null);

//## object

console.log(typeof []);

//## object

console.log(0 || "default");
//`اختر القيمة الصحيحة `

//## "default"

console.log(0 ?? "default");
//`اذا كانت قيمة الاولى null , undifined استخدم القيمة الثانية`
//`وبما ان قيمة 0  تعني false  اذن سيستخدمها ولن ينتقل الي القيمة الاحتياطية`

//## 0

console.log(Boolean(""));
//يجب ان تكون القيمة منطقية true false ,

//## false

console.log(Boolean("false"));
//`تم عكس القيمة`

//## tru/e

console.log(Boolean([]));
//`array  تعتبر true رغم كونها فارغة `

//## true

console.log(10 % 3);

//## 1

console.log(null + 1);
//`لان  null = object `

//## 1

console.log(undefined + 1);
//`لان  undefined = undefined `

//## NaN
