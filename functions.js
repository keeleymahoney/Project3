function style1()
{

    localStorage.setItem("page_stylesheet_name", "style.css");
    load_style();
    
}

function style2()
{
    localStorage.setItem("page_stylesheet_name", "second-style.css");
    load_style();
    //document.getElementById('stylesheet').setAttribute("href", "second-style.css");
}

function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
        page_style = "style.css";
    }
    document.getElementById('stylesheet').setAttribute("href", page_style);
}

load_style();


