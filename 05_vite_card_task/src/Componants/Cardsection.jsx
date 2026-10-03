
import Card from "./Card";
function Cardsection() {
  let  obj1 = { imgurl: "img1.jpg" ,title:"Cute Puppy Friends",description:"🐶 Two cute fluffy puppies sitting together",id:"1",likecount:"10"}
  let  obj2 = { imgurl: "img2.jpg" ,title:"Magical Fairy House",description:"🏡 A tiny magical house with a cute fairy in a glowing garden",id:"2",likecount:"20"}
  let  obj3 = { imgurl: "img3.jpg" ,title:"Happy Pikachu",description:"⚡ A cute Pikachu sitting happily in a sunny forest.",id:"3",likecount:"30"}
  let  obj4 = { imgurl: "img4.jpg" ,title:"Adorable Panda Friends",description:"🐼 Two adorable pandas relaxing together on a tree.",id:"4",likecount:"40"}
  let  obj5 = { imgurl: "img5.jpg" ,title:"Playful Kitten",description:"🐱 A cute kitten looking playfully at the camera.",id:"5",likecount:"50"}




    return (
        <>
            <section className="container-fluid">
                <div className="row m-3">
                    <Card data={obj1} />
                    <Card data={obj2} />
                    <Card data={obj3} />
                    <Card data={obj4} />
                    <Card data={obj5} />



                </div>

            </section>
        </>
    )
}
export default Cardsection;


