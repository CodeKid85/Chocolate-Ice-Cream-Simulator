let IceCream = 0;
let IceCreamPerClick = 0.1;
let AchievementNumber = 0
let adder = 0.01

function ClickIceCream() {
    IceCream += IceCreamPerClick;
    IceCreamPerClick += adder
    document.getElementById("NumOfIceCream").innerHTML = "Chocolate Ice Cream in stomach: " + IceCream.toFixed(1) + " scoops.";
    document.getElementById("IceCreamPerClick").innerHTML = "Chocolate Ice Cream added to stomach per Click: " + IceCreamPerClick.toFixed(2) + " scoops.";
    localStorage.setItem('IceCream', IceCream); 
    localStorage.setItem('IceCreamPerClick', IceCreamPerClick); 
} 

setInterval(function(){ 
    if(IceCream > 10 && AchievementNumber < 1) {
        alert("Much danger there is for your body in your quest. BOOST: + .04 scoop size")
        AchievementNumber += 1
        adder += 0.04
    }
    if(IceCream > 100 && AchievementNumber < 2) {
        alert("You are a good clicker, but your body is starting to feel the toll of your chocolate ice cream mission. BOOST: + 0.05 scoop size")
        AchievementNumber += 1
        adder += 0.05
    }
    if(IceCream > 500 && AchievementNumber < 3) {
        alert("Very Skill, Very Sick. BOOST: + 0.10 Scoop size")
        AchievementNumber += 1
        adder += 0.10
    }
    if(IceCream > 2500 && AchievementNumber < 4) {
        alert("You feel like you are going to throw up. BOOST: + .10 scoop size")
        AchievementNumber += 1
        adder += 0.10
    }
    if(IceCream > 6000 && AchievementNumber < 5) {
        alert("Why are you still eating chocolate ice cream? BOOST: + 0.20 scoop size")
        AchievementNumber += 1
        adder += 0.20
    }
    if(IceCream > 12000 && AchievementNumber < 6) {
        alert("You start to become VERY popular with the ice cream store owner, Henry. And start to become VERY unpopular with your health insurance BOOST: + 0.50 scoop size")
        AchievementNumber += 1
        adder += 0.50
    }
    if(IceCream > 20000 && AchievementNumber < 7) {
        alert("At this rate you're going to die... BOOST: +0.50 scoop size")
        AchievementNumber += 1
        adder += 0.50
    }
    if(IceCream > 50000 && AchievementNumber < 8) {
        alert("Your friends are very concerened with you. Oh wait, I forgot, you don't have any friends. DEMOTIVATION: -0.50 scoop size")
        AchievementNumber += 1
        adder -= 0.50
    }
    if(IceCream > 100000 && AchievementNumber < 9) {
        alert("You donated to the charity, so they will now pay for your Ice Cream. BOOST: + 1.00 scoop size")
        AchievementNumber += 1
        adder += 1.00
    }
    if(IceCream > 500000 && AchievementNumber < 10) {
        alert("You have shown surprisingly good resistance to the sugar consumption up to this point. BOOST: + 1.00 scoop size")
        AchievementNumber += 1
        adder += 1.00
    }
    if(IceCream > 1000000 && AchievementNumber < 11) {
        alert("Wow. 1 million. Very Skillz. You become national news, even though you can here your heart throbbing in your ears and are coughing up blood. BOOST: + 5.00 scoop size")
        AchievementNumber += 1
        adder += 5.00
    }
    if(IceCream > 10000000 && AchievementNumber < 12) {
        alert("You feel as though you might explode, your eyes are bulging out of their sockets. Docters won't take you on, as you're 'too far gone'. You are brodcasted internationally as 'Chocolate Ice Cream Man'. HEALTH CONCERNS: - 7.00 scoop size'")
        AchievementNumber += 1
        adder -= 7.00
    if(IceCream > 500000000 && AchievementNumber < 13) {
        alert("You are very sick. You friend taunts you, 'You gonna stop eating Ice Cream?' Enraged, you continue to eat on. PURPOSE: + 10 scoop size")
        AchievementNumber += 1
        adder += 10.00
    }
    }
    if(IceCream > 1000000000 && AchievementNumber < 14) {
        alert("Your world slowly fades away, your heart burns, your head seethes, your hand goes limp as you slowly drift out of this world. Your friend that challenged you says, '1 billion scoops. Noice.' It's the last thing you'll ever hear. BUT WAIT! Your undead fingers slowly start clicking at the device again. YOU CAN STILL EAT CHOCOLATE ICE CREAM!!! Your friend is amazed, but doesn't say anything as he knows you won't here him. UNDEAD: + 20.00 scoop size")
        AchievementNumber += 1
        adder += 20.00
    }
}, 1000);