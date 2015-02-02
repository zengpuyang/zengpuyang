// JavaScript Document
var myArr=new Array("A","B","C");  //创建数组myArr
var myArr2=new Array("J","K","L"); //创建数组myArr2
var myArr3=new Array();            //创建数组myArr3
myArr3=myArr3.concat(myArr,myArr2);  //数组myArr和myArr2合并，并赋给数组myArr3
/*输出合并后数组myArr3的元素值*/
document.write("合并后数组：");
for(i in myArr3)
{
	document.write(myArr3[i]+"　");
}
myArr3.pop();   //删除myArr3数组的最后一个元素
/*输出删除最后一个元素后的数组*/
document.write("<br />删除最后一个元素：");
for(i in myArr3)
{
	document.write(myArr3[i]+"　");
}
myArr3.shift();   //删除myArr3数组的第一个元素
/*输出删除第一个元素后的数组*/
document.write("<br />删除第一个元素：");
for(i in myArr3)
{
	document.write(myArr3[i]+"　");
}
myArr3.push("m","n","q");   //尾部追加三个元素
/*输出在尾部追加元素后的数组*/
document.write("<br />尾部追加三个元素：");
for(i in myArr3)
{
	document.write(myArr3[i]+"　");
}
myArr3.unshift("x","y","z");  //数组开头添加三个元素
/*输出在开头添加元素后的数组*/
document.write("<br />开头插入三个元素：<br />");
for(i in myArr3)
{
	document.write(myArr3[i]+"　");
}
var myArr4=myArr3.slice(2,4);  //在第二个位置删除4个数组元素，并将修改后的数组赋值给新数组myArr4
//输出组成的新数组
document.write("<br />组成新的数组：<br />");
var s=myArr4.join("　");   //将数组转换成字符串，用空格分隔
document.write(s);   //输出字符串
var s2="张三,李四,王五";   //声明字符串
var myArr5=s2.split(",");   //将字符串s2分隔到数组myArr5
/*输出数组myArr5*/
for(i in myArr5)
{
	document.write(myArr5[i]+"　");
}