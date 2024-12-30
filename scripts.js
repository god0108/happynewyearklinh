let currentContentIndex = 0;
let contents = [];

window.onload = function() {
    setTimeout(() => {
        const welcomePopup = document.getElementById("welcome-popup");
        welcomePopup.classList.add("show");
    }, 500); // Độ trễ 0.5 giây
};

function closeWelcomePopup() {
    const welcomePopup = document.getElementById("welcome-popup");
    welcomePopup.classList.remove("show");
}

function openPopup(letterNumber) {
    const popup = document.getElementById("popup");
    const popupBody = document.getElementById("popup-body");

    switch (letterNumber) {
        case 1:
            contents = [
                "<p>Ahihi xin chào đến với tâm thư đầu tiên hoặc khum phải 🤡</p><img src='Source/1.jpg' alt='Image 1'>",
                "<p>Đây là bức thư chứa mục tiêu của tớ trong 2025 có lẽ thì cậu có thể nói là mục tiêu của mình thì mình tự lo đi mang t vào chi hoặc kiểu z</p><img src='Source/3.jpg' alt='Image 2'>",
                "<p>Nhưng mà mục tiêu của tớ có cậu nên tất nhiên tớ phải mang vào rồi🤡<p><img src='Source/1.jpg' alt='Image 1'>",
                "<p>Mục tiêu năm nay là phải kiếm rất nhiều tiền để dẫn cậu đi chơi khắp nơi<p><p><img src='Source/6.jpg' alt='Image 4'>",
                "<p>Tiếp theo là phải đỗ thạc sĩ để có cái cho bạn khoe là toy có 1 đứa bạn thạc sĩ 🤡 chớ đúng hok<p><img src='Source/3.jpg' alt='Image 2'>",
                "<p>Ngoài ra phải chăm chút bản thân nhiều chút thật đẹp trai để cậu thấy tiếc kkkkk <p><img src='Source/5.jpg' alt='Image 3'>",
                "<p> Sương sương là thế đó nếu con thư thì coi típ hok thì để cái thằng đang ngồi nch với cậu nói típ 🤡<p><img src='Source/7.jpg' alt='Image 3'>",
            ];
            break;
        case 2:
            contents = [
                "<p>Cái nì là kế hoạch của tớ trong 2025 💃💃💃</p><img src='Source/7.jpg' alt='Image 3'>",
                "<p>Kế hoạch của tớ khá là ngắn gọn thôi nên chắc cũm cũm sẽ qua thư mới nhanh thui kiểu nói sao ta nếu mà đã đọc mục tiêu của tớ, tớ cũng đã nói là tớ sẽ tập trung nhiều về học hành tớ sẽ học thạc sĩ đến khi cậu tốt nghiệp thì tớ cũng sẽ tốt nghiệp (chắc dị 🤡) một phần nữa là vì tớ muốn mình sẽ kiếm thật nhiều tiền và thực hiện mấy lời hứa với cậu<p>",
                "<p>E hèm tới đây chắc không nhớ toy đã hứa gì với cô đúng không hoặc nhớ nhưng cố tình không nhớ <p></p><img src='Source/8.jpg' alt='Image 10'>",
                "<p>Rồi để nhắc cho nhớ nè tớ đã hứa sẽ dẫn cậu đi khắp nơi mua và tới những nơi xịn xò ít nhất là ở nhà chung cư ctct mà muốn làm được thì toy phải có nhiều tiền trước đã và tất nhiên đi kèm phải là công việc xịn xịn r <p><\p><img src='Source/7.jpg' alt='Image 11'>",
                "<p>Kế hoạch hiện tại của tớ chỉ có thế thôi nếu muốn hỏi gì thêm thì hãy hỏi đứa đang nói chiện với cậu nhé <p>"
            ];
            break;
        case 3:
            contents = [
                "<p>Hmmm nếu vào đây thì cẩn thận nhé vì có thể hơi suy á bà nhưng mà đừng có mà suy quá bà mà suy tui khóc tui dãy đành đạch á 🤡🤡🤡</p><img src='Source/9.jpg' alt='Image 11'>",
                "<p>Thì như tiêu đề đã ghi rồi á chỉ là nhìn lại 2024 m biết không chưa gì đã 1 năm và có trăm chuyện xảy ra t biết có nhiều chuyện m không nhớ, nhưng cũng có những chuyện khiến t ko quên được á m<p>",
                "<p>m nhớ lúc đầu năm t còn đang thất nghiệp không đó là lúc t chán nản nhất nhưng mà có m lúc nào cũng an ủi t, t kiểu vui lắm á m có công ty t làm dc vài ngày nghỉ t biết m không thể an ủi gì vì m không trải qua nhưng mà nếu không có m t có lẽ sẽ chán nản mất nhưng có m là mục tiêu để t có thể phấn đầu mà t đã vô grab nè hihi<p><\p><img src='Source/10.jpg' alt='Image 12'>",
                "<p>Xong rồi dần dần t với m thân nhau nhiều hơn nè t mua cho m đủ thứ nhưng mà làm được tầm 1 tháng thì đt t hư và t đã mua zflip 5 omg sang thật sự lương 15tr đi mua cái đt 16tr 🤡🤡🤡 nhưng mà tâm lý tháng 6 sẽ vào Đà Nẵng nên t mua để có thể cho m ké á m nhưng mà tới tháng 12 mới vô được nó kiểu 3 chấm 3 chấm T.T<p>",
                "<p>Tới sinh nhật m, m còn chả cho t vào nma m biết ko m đã cho t 1 tí hy vọng á m, m đã bảo m sẽ suy nghĩ thật kỹ lời tỏ tình của t sang năm uhm t đã cố gắng tốt để trở nên hoàn thiện mình không như năm ngoái á m t vừa tiết kiệm t vừa lo cho gia đình và cuộc sống t để có thể khi t vào t có thể cho m thấy t có thể là ny tốt nhất của m á ;> <p>",
                "<p>À m có nhớ ngày mấy t mua cho m iphone 13 hok? uhm sau sinh nhật m lúc t vừa có lương tháng 7 t nói t ổn là t đã nói dối ;> t xin lỗi m t đã sợ m lo lắng nhưng thật ra t đã khá chật vật sau khi mua iphone 13 (nhưng mà đã qua rồi khum sao nè) sau khi mua xong t chỉ còn 2tr để vừa lo tiền trọ vừa lo tiền ăn t phải đi mượn bạn t để sống đủ 1 tháng á m xui 1 cái là tháng tiếp theo là sn t, t phải bao mn trong cty ăn sn theo truyền thống 🤡 thế là tới tháng 8 gần như lương t nhận lại còn đúng 5tr sau khi thanh toán hết nợ cho mọi người ;> nhưng mà m biết sao không t chỉ muốn m vui thôi dù t khổ thì chỉ 1 mình t khổ thôi m phải là ng hạnh phúc nhất. Tuy khổ dị nma t cũm đã có tí niềm vui và niềm vui lúc khi m nói là t rất quan trọng với m, dù t lúc đó t biết hy vọng t là ny m trong năm nay là = 0 nhưng t chỉ muốn m coi t là người quan trọng nhất thôi ấy ng mà quan trọng hơn cả ny m đó là lý do tại sao t mua ipad cho m nè<p>",
                "<p>Đã là người quan trọng nhất thì t ko thể để m thất vọng dc, vì m muốn ipad nên tháng sau đó dù t chỉ mới có lương để sinh hoạt cơ bản như bth t đã ko ngần ngại chi ra để mua ipad cho m á m tại vì t ko muốn m khổ sở mang laptop nặng nề á m, m có mệnh hệ gì t chịu ko nổi nên t đã ko ngần ngại mua ipad cho m thật ra t đã tính trả hết :>> nma nếu t trả hết thì coi như t phải ghi nợ tiếp t đã chuẩn bị tinh thần r á m ;> nma m đã trả 1 phần tuy ko nhiều nhưng nó đã cứu t tháng đó :>> và tất nhiên sau tháng đó thì t làm 1 xíu là có lương lại và dư ra 1 khoản đi chơi với m nì hihi tuy nó nghĩ lại nó hơi suy nma nó là kỉ niệm vừa cực vừa vui của tau<p><\p><img src='Source/8.jpg' alt='Image 13'>",
                "<p>Tất nhiên không thể không nhớ khoản thời gian t vui nhất rồi. Đó là khi call nói chuyện với m và dạy m học á m t dc thả thính m nè dc giỡn với m nè nghe m kể chuyện nè và được ngắm m nữa tất nhiên là không thể thiếu vừa rồi lúc t ra Đà Nẵng rồi. Nhưng mà m biết sao không khi t nghe m nói m có ny t lập tức chỉ muốn xỉu ngay tại văn phòng thôi vì t không thể tin là có người may mắn hơn t á m, hàng vạn câu hỏi trong đầu t, suốt 1 năm qua t đã cố gắng vì điều gì thế giới quan của t mọi thứ như sụp đổ, sự sụp đổ đó tuôn trào hàng nghìn lần khi t sự đùa giỡn của cả 2 sẽ không còn nữa mà nó còn ngay sau ngày t đặt vé máy bay t thật sự đã muốn hủy chuyến bay nhưng 1 phần trong t ngăn cản t làm chuyện đó á m t cứ khóc và khóc, khóc nhiều tới mức mà t ko biết đã khóc bao nhiều lần rồi nhưng may mắn là t với m đã hiểu nhau rồi nè 😊<p>",
                "<p>Trong tháng vừa qua cũng ko thiếu chuyện shock khi vừa biết m có ny thì lại nghe chuyện khác cái tin nhắn đó nó hiện lên t đã shock á m t gì mà m đưa trai về trọ làm chuyện xyz (t kiểu bị sợ ấy vì ko thể là m dc) rồi cái gì mà nyc nym t kiểu t bị mông lung giữa mọi chuyện rồi lại chuyện t với m cãi nhau những chuyện ko đâu, rồi m phải vào viện nhưng mà cuối cùng cũng ổn rồi hic :') <p><\p><img src='Source/11.jpg' alt='Image 14'>",
                "<p>Và cuối cùng là kết thúc 2024 rồi đó vui có buồn có khổ cực cũm có nói chung là muôn màu nhưng sau tất cả t chỉ muốn m vui thôi dù bây giờ m đã có ny rồi nhưng mà với t vị trí của m trong tim t nó không thay đổi gì hết nó vẫn là người quan trọng nhất với t<p>",
                "<p>Một đoạn clip cũm cute cute cậu đã quay gửi tới cậu và cũng hy vọng cậu sẽ vui như cố gái đáng yêu nhất thế giới trong video🤡<video controls><source src='Source/4.mp4' type='video/mp4'>Your browser does not support the video tag.</video><p>"

            ];
            break;
        case 4:
            contents = [
                "<p>m coi cái này đầu tiên hay cuối cùng nhỉ mà thôi nó cũng không quan trọng lém hihi 🤡🤡🤡<p><\p><img src='Source/8.jpg' alt='Image 15'>",
                "<p>Sau tất cả t muốn cảm ơn m đã ở bên cạnh t suốt 1 năm qua t cũng xin lỗi vì đã không thể làm m thích t nhiều lúc đã khiến m cô đơn bị bỏ rơi nhưng sau tất cả chúng ta vẫn chơi với nhau (2 năm rùi)<p><\p><img src='Source/2.jpg' alt='Image 16'>",
                "<p>Cái nì là t mới thêm vào thôi nhưng mà thật sự nha dù phải nói là rất rất ghét ny m vì dám cướp m ra khỏi tau nhưng mà t cảm ơn vì đã bên cạnh m thay t. Điều t luôn dằn vặt là ko thể bên cạnh m mỗi khi m cần ai đó, khi m ốm thay vì t chỉ có thể chat qua chiếc điện thoại thôi nhiều lúc chỉ trách mình vô dụng nhưng ny m thì khác người đó đã làm việc đó thay t rồi thật sự cảm ơn á m 😊 <p>",
                "<p>Tuy t ko biết có cơ hội thích m nữa không nhưng t sẽ vẫn giữ lời hứa đó nếu ny của t ko phải m thì không phải là ai khác cả 😊 nhưng mà đừng hiểu nhầm ý t nha t vẫn muốn m là bạn t thiệt đó chỉ là nếu ny m tệ với m thì có t ở đây luôn quan tâm m thôi nè <p>",
                "<p>Lời cảm ơn có thế thui cảm ơn vì làm bạn với tớ 💃💃💃 (Hình hơi xấu mà kệ đi ha vì nó là hình chụp chung của 2 đứa hihi)<p><\p><img src='Source/13.jpg' alt='Image 15'>",
            ];
            break;
    }

    currentContentIndex = 0;
    popupBody.innerHTML = contents[currentContentIndex];
    popup.classList.add("show");
}

function nextContent() {
    const popupBody = document.getElementById("popup-body");
    currentContentIndex++;
    if (currentContentIndex < contents.length) {
        popupBody.innerHTML = contents[currentContentIndex];
    } else {
        closePopup();
    }
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
}