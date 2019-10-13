var out = document.querySelector(".output");
var op = ['*','+','-','/'];
function insert(x)
{
    var s = out.value;
    
    if (s=="error")
    ac();
    var y = s.charAt(s.length-1);
    if (!(op.includes(y) && op.includes(x)))
    {
     out.value += x;
    }
    else
    {
     out.value = s.substring(0,s.length-1) + x;
    }
}
function equals()
{
    var s = out.value;
    try
    {
    var ans = eval(out.value);
    if(ans=="Infinity")
    ans="error";
    out.value = ans;
    }
    catch
    {
        out.value="error";
    }
}
function ac()
{
    out.value="";
}
function del()
{
    var s = out.value;
    if(s=="error" || s=="Infinity")
    {
        ac()
    }
    else{
    var l = s.length;
    if (s=="")
        ac();
    else
    out.value = s.substring(0,l-1);
    }

}