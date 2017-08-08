$(function() {
  $(':radio[name="event"]').change(function() {
    var pos = positions(this);
    $("#event-title").text(events[pos[0]].title);
    $("#event-place").text(events[pos[0]].address);
    $("#event-time").text(events[pos[0]].registered);
    $("#event-description").text(events[pos[0]].about);
    $("#event-next").text(events[pos[1]].title);
  });

  $(':radio[name="deal"]').change(function() {
    var pos = positions(this);
    $("#deal-title").text(deals[pos[0]].money + " " + deals[pos[0]].title);
    $("#deal-company").text(deals[pos[0]].company);
    $("#deal-address").text(deals[pos[0]].address);
    $("#deal-money").text(deals[pos[0]].money);
    $("#deal-time").text(deals[pos[0]].time + " left");
    $("#deal-quantity").text(deals[pos[0]].quantity + " purchased");
    $("#deal-about").text(deals[pos[0]].about);
    $("#deal-next").text(deals[pos[1]].money + " " + deals[pos[1]].title);
  });

  var positions = function(radioB){
    var category = parseInt($(radioB).filter(':checked').val())-1;
    var next = category+1;

    if(next >= 4){
      next = 0;
    }
    return [category, next];
  }
});

var deals = [
  {
    "quantity": 117,
    "title": "Cillum aute duis sunt amet minim reprehenderit aliqua.",
    "money": "98$ ",
    "address": "668 Lacon Court, Fivepointville",
    "about": "Irure deserunt voluptate dolore aliqua quis nulla in qui exercitation. Irure Lorem adipisicing eiusmod esse. Dolore irure ad in excepteur eu est veniam ipsum. Officia pariatur laboris officia minim dolore. Ullamco deserunt nostrud eu ex fugiat dolor sit labore officia aliquip eiusmod.\r\n",
    "time": "05:31",
    "company": "Entroflex"
  },
  {
    "quantity": 155,
    "title": "Nulla exercitation id ex minim commodo voluptate laborum dolor laborum quis.",
    "money": "17$ ",
    "address": "863 Battery Avenue, Saddlebrooke",
    "about": "Culpa cupidatat nulla dolor sint anim eiusmod proident eiusmod qui qui. Laborum commodo pariatur ad tempor magna. Commodo laborum irure Lorem fugiat deserunt ea ex id labore veniam minim non. Magna incididunt adipisicing enim sit pariatur do exercitation fugiat magna. Pariatur culpa enim aute aute eiusmod labore labore culpa do labore culpa occaecat quis sunt. Laboris veniam commodo culpa officia magna ex deserunt id mollit. Voluptate minim qui cupidatat commodo elit sunt culpa nulla elit in.\r\n",
    "time": "08:06",
    "company": "Isbol"
  },
  {
    "quantity": 105,
    "title": "Ex labore nulla do ullamco consectetur dolor aliqua velit pariatur ea enim enim.",
    "money": "62$ ",
    "address": "452 Louisa Street, Southmont",
    "about": "Nostrud proident minim quis ea aute ipsum ipsum ad aliquip esse. Enim magna Lorem ipsum esse voluptate sint ullamco ad reprehenderit tempor tempor dolore commodo ea. Dolor sint ex nisi nostrud. Id tempor est ullamco ipsum ullamco Lorem duis qui laboris. Cillum voluptate cillum quis ea ad ullamco nulla tempor cupidatat ea adipisicing. Exercitation aliquip nisi aliquip voluptate magna laboris tempor occaecat nulla nostrud laboris aliquip reprehenderit consequat. Nisi pariatur enim irure ipsum ea.\r\n",
    "time": "05:48",
    "company": "Mangelica"
  },
  {
    "quantity": 175,
    "title": "Consequat laboris fugiat occaecat exercitation proident in id mollit ea aute non ex commodo.",
    "money": "37$ ",
    "address": "496 Cobek Court, Websterville",
    "about": "Labore sunt consequat tempor eiusmod eu non dolore nisi consectetur non magna ad. Dolor ad qui nisi cupidatat aliquip quis. Cupidatat minim occaecat veniam deserunt laboris dolore aute commodo proident culpa incididunt adipisicing.\r\n",
    "time": "04:52",
    "company": "Cubicide"
  }
]

var events = [
  { "title" : "title1",
    "address": "941 Debevoise Street, Marenisco",
    "about": "Ea proident voluptate eiusmod minim ex labore dolor tempor ea dolore duis. Veniam consectetur magna consequat commodo sunt. Cupidatat laboris voluptate tempor ea labore ad ea adipisicing consectetur.\r\n",
    "registered": "2016-07-28:18 "
  },
  { "title" : "title2",
    "address": "729 Maujer Street, Shepardsville",
    "about": "Anim do nulla velit officia laboris. Ipsum duis minim deserunt id veniam aliqua reprehenderit veniam ea aute laboris amet voluptate ullamco. Velit nostrud sint amet ipsum do laboris deserunt elit dolor cupidatat Lorem deserunt officia eiusmod. Cillum incididunt laboris nisi ut.\r\n",
    "registered": "2016-02-22:02 "
  },
  { "title" : "title3",
    "address": "197 Sullivan Street, Santel",
    "about": "Aliquip deserunt ad occaecat et dolore laboris consectetur minim. Culpa labore sunt minim minim consequat aute quis deserunt incididunt est proident exercitation. Veniam minim laboris eu eiusmod nostrud officia reprehenderit culpa dolor magna. Consectetur enim duis mollit cupidatat quis minim. Cupidatat amet qui ut culpa eiusmod duis aute duis consectetur reprehenderit fugiat incididunt.\r\n",
    "registered": "2017-05-09:01 "
  },
  { "title" : "title4",
    "address": "953 Foster Avenue, Woodlands",
    "about": "Incididunt qui consequat officia nostrud occaecat laborum do veniam mollit velit eu officia. Laboris quis duis ullamco cupidatat sunt anim laboris sit sit id ullamco in. Enim eiusmod amet culpa reprehenderit culpa enim aliqua ut commodo.\r\n",
    "registered": "2016-10-23:13 "
  },
  { "title" : "title5",
    "address": "206 Cox Place, Retsof",
    "about": "Cupidatat consectetur sunt sunt amet excepteur et dolor esse mollit ex deserunt magna. Est sit dolore eiusmod incididunt dolore minim et dolor ad. Ex non Lorem sit commodo eiusmod occaecat in minim labore duis sit qui cupidatat esse. Ex amet id laborum velit ex quis ex occaecat occaecat veniam voluptate. Minim consequat eu minim in.\r\n",
    "registered": "2016-02-22:01 "
  },
  { "title" : "title6",
    "address": "567 Trucklemans Lane, Marysville",
    "about": "Ipsum fugiat in enim reprehenderit pariatur dolore cupidatat dolor. Aliquip sint laboris enim deserunt veniam. Labore proident elit in sint labore eiusmod aute. Eiusmod pariatur ex eu proident commodo voluptate esse id irure cillum occaecat pariatur commodo ipsum. Voluptate qui voluptate dolore et ullamco mollit cillum sint.\r\n",
    "registered": "2016-06-13:05 "
  }
]

