<template>
<header>
    <div class="logo">
        .Manu.❤
    </div>
    <div class="navbar">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/Gallery">Gallery</router-link>
            </li>
            <li>
                <router-link to="/More">More</router-link>
            </li>

        </ul>
    </div>
</header>
</template>

<style scoped lang="scss">
$gradient-purple : linear-gradient(120deg, #E4B5F9, #8CCCF8, lightblue, #7C5ED6);
$dark-purple: #9075e0;
$boxShadow : 3.5px 3.5px 0 rgb(97, 7, 172);
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}
header
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 12px;
    border-radius: 35px;
    // background: $gradient-purple;
    border: 3px solid $dark-purple;
    font-weight: 600;
    position: fixed;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 400px;
    width: 85%;
    backdrop-filter: blur(10px);
    .logo
    {
        color: rgb(120, 14, 206);
        padding-left: 5px;
        font-size: 14.5px;
    }
    .navbar
    {
        ul
        {
            display: flex;
            align-items: center;
            gap: 8px;
            li
            {
                font-size: 12px;
                background-color: $dark-purple;
                padding: 4px 12px;
                border-radius: 35px;
                color: white;
                cursor: pointer;
                box-shadow: $boxShadow;
                a
                {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
}
</style>


<script>
export default{
    name : 'HeaderComp'
}
</script>