// JavaScript Document
var x=new Array(1,20,8,12,6,7);   //创建数组
document.write("排序前数组:"+x.join(",")+"<p>"); //输出数组元素
x.sort();   //按字符升序排列数组
document.write("没有使用比较函数排序后数组:"+x.join(",")+"<p>");   //输出排序后数组
x.sort(asc);  //有比较函数的升序排列
/*升序比较函数*/
function asc(a,b)
{
	return a-b;
}
document.write("排序升序后数组:"+x.join(",")+"<p>");//输出排序后数组
x.sort(des); //有比较函数的降序排列
/*降序比较函数*/
function des(a,b)
{
	return b-a;
}
document.write("排序降序后数组:"+x.join(","));//输出排序后数组