export type DayStop = {
  title: string;
  description?: string;
  meals?: string;
  image: string;
  highlight?: string;
  ticket?: boolean;
};

export type Day = {
  day: string;
  label: string;
  stops: DayStop[];
};

export type Hotel = {
  name: string;
  location: string;
  image: string;
  accent: string;
};

export const routeLabel =
  "mumbai-delhi-kullu-Manali - Kasol - Dharamshala - Amritsar-delhi-MUMBAI";

export const days: Day[] = [
  {
    day: "01",
    label: "Mumbai to Delhi",
    stops: [
      {
        title: "Mumbai to Delhi",
        description:
          "Assemble at Bandra Terminus by 11.00 AM and Board DEE GARIBRATH (12216) at 12:00 PM. Overnight Journey in the train.",
        image: "/images/day01-india-gate.jpg",
        ticket: true,
      },
    ],
  },
  {
    day: "02",
    label: "Delhi",
    stops: [
      {
        title: "Delhi",
        description:
          "Arrive at Delhi Sarai Rohilla Railway Station by 11:00 AM. Proceed for a sightseeing tour of Delhi, visiting the Red Fort, Qutub Minar, and India Gate (as per time permits). Later, enjoy dinner and continue the overnight journey towards Manali.",
        meals: "Dinner",
        image: "/images/day-delhi.jpg",
      },
      {
        title: "Chandani Chowk",
        description:
          "Explore the vibrant Chandni Chowk, famous for its historic lanes, bustling markets, and iconic Delhi street food and Sarojini Nagar.",
        image: "/images/day-chandni.jpg",
      },
    ],
  },
  {
    day: "03",
    label: "Manali",
    stops: [
      {
        title: "Manali",
        description:
          "After reaching Kullu in the morning, proceed for an exciting River Rafting experience. After rafting, check in to the hotel, freshen up, and relax. In the evening, visit the famous Mall Road for shopping, local food, and leisure. Return to the hotel for dinner and an overnight stay.",
        meals: "Breakfast, Lunch & Dinner",
        image: "/images/day-manali.jpg",
      },
      {
        title: "River Rafting",
        description:
          "On the way experience thrilling River rafting in the waters of Kullu.",
        image: "/images/day-rafting.jpg",
        highlight:
          "On the way experience thrilling River rafting in the waters of Kullu.",
      },
    ],
  },
  {
    day: "04",
    label: "Solang Valley",
    stops: [
      {
        title: "Solang Valley",
        description:
          "After breakfast, proceed for a full-day excursion to Solang Valley. If weather and road conditions permit, continue towards Atal Tunnel and Sissu. Enjoy the breathtaking snow-covered landscapes and indulge in thrilling adventure activities (at your own cost) such as Zipline, Skiing, ATV Ride, Snow Scooter, and other snow activities. In the evening, visit the famous Hidimba Devi Temple. Return to the hotel for dinner, followed by an exciting DJ Night.",
        meals: "Breakfast & Dinner",
        image: "/images/day-solang.jpg",
        highlight:
          "Visit the famous mall road in the evening to shop for local handicrafts and leather goods.",
      },
    ],
  },
  {
    day: "05",
    label: "Way to Kasol",
    stops: [
      {
        title: "Way to Kasol",
        description:
          "After breakfast, check out from the hotel and proceed for an exciting paragliding session (at your own cost). Later, visit the famous R.K. Shawl Factory. Continue your scenic drive towards Kasol. Upon arrival, check in to the riverside camp. In the evening, enjoy a bonfire and Open Air DJ under the stars.",
        meals: "Breakfast & Dinner",
        image: "/images/day-kasol.jpg",
      },
      {
        title: "Stargazing at Kasol",
        description:
          "Cozy bonfire nights in Kasol, surrounded by mountains, music, laughter, and unforgettable memories under the stars.",
        image: "/images/day-stargazing.jpg",
      },
    ],
  },
  {
    day: "06",
    label: "Manikaran Gurudwara",
    stops: [
      {
        title: "Manikaran Gurudwara",
        description:
          "After breakfast, check out from the hotel and proceed to Manikaran Gurudwara, where you can take a holy dip in the famous natural hot water springs.",
        image: "/images/day-manikaran.jpg",
        highlight:
          "Visit Manikaran Sahib, known for its sacred hot springs, serene riverside setting, and spiritual atmosphere.",
      },
      {
        title: "The Valley Of Kasol",
        description:
          "Later, visit the vibrant Kasol Market and enjoy free time for café hopping, shopping, and exploring the scenic surroundings. In the evening, enjoy a DJ Party followed by Dinner in Kasol. Later at night, depart for Dharamshala for an overnight journey.",
        meals: "Breakfast, Lunch (Gurudwara) & Dinner",
        image: "/images/day-valley.jpg",
      },
    ],
  },
  {
    day: "07",
    label: "Dharamshala",
    stops: [
      {
        title: "Dharamshala",
        description:
          "Reach Dharamshala in the morning and check in to the hotel. Later, visit the iconic Dharamshala Cricket Stadium, Bhagsu Waterfall, and St. John in the Wilderness Church. In the evening, explore Namgyal Monastery and McLeod Ganj.",
        meals: "Breakfast, Lunch and Dinner",
        image: "/images/day-dharamshala.jpg",
      },
      {
        title: "Namgyal Monastery",
        description:
          "A peaceful Tibetan Buddhist retreat known for its spiritual ambience, prayer wheels, and stunning mountain surroundings.",
        image: "/images/day-namgyal.jpg",
        highlight:
          "Visit Namgyal Monastery, a peaceful Tibetan Buddhist retreat known for its spiritual ambience, prayer wheels, and stunning mountain surroundings.",
      },
    ],
  },
  {
    day: "08",
    label: "Amritsar",
    stops: [
      {
        title: "Amritsar",
        description:
          "After breakfast, proceed to Amritsar. Later, visit the iconic Wagah Border for the Beating Retreat Ceremony. In the evening, visit the Golden Temple and experience its breathtaking night view.",
        meals: "Breakfast and Dinner",
        image: "/images/day-amritsar.jpg",
        highlight:
          "Wanderworld recommends you visit the Golden Temple again and enjoy the exquisite night view.",
      },
      {
        title: "Prom Night",
        description:
          "Dance the night away at a high-energy DJ Prom Night filled with music, lights, fun, and unforgettable memories.",
        image: "/images/day-prom.jpg",
      },
    ],
  },
  {
    day: "09",
    label: "Amritsar to Delhi",
    stops: [
      {
        title: "Amritsar to Delhi",
        description:
          "After breakfast, visit the Partition Museum and Jallianwala Bagh. Spend the evening shopping at Amritsar Market. After dinner, begin your overnight journey to Delhi.",
        meals: "Breakfast, Lunch (Gurudwara) and Dinner",
        image: "/images/day-jallianwala.jpg",
      },
    ],
  },
  {
    day: "10",
    label: "Delhi to Mumbai",
    stops: [
      {
        title: "Delhi to Mumbai",
        description:
          "Reach Delhi by morning and board BDTS Garib Rath (12215) from Delhi Sarai Rohilla Railway Station at 08:55 AM for your onward journey to Mumbai. Enjoy a full-day train journey with overnight travel.",
        image: "/images/day-train.jpg",
      },
    ],
  },
  {
    day: "11",
    label: "Mumbai",
    stops: [
      {
        title: "Mumbai",
        description:
          "Reach Mumbai by morning, marking the end of a memorable journey. Return home with countless happy memories and unforgettable experiences to cherish forever.",
        image: "/images/day-mumbai.jpg",
      },
    ],
  },
];

export const hotels: Hotel[] = [
  {
    name: "The Manali Inn",
    location: "Manali",
    image: "/images/hotel-manali-hd.jpg",
    accent: "#5f7d95",
  },
  {
    name: "Hotel Sandhya Kasol",
    location: "Kasol",
    image: "/images/hotel-kasol-hd.jpg",
    accent: "#9a7a4a",
  },
  {
    name: "DN Resort",
    location: "Dharamshala",
    image: "/images/hotel-dharamshala-hd.jpg",
    accent: "#aebdd4",
  },
  {
    name: "Hotel BR Grand",
    location: "Amritsar",
    image: "/images/hotel-amritsar-hd.jpg",
    accent: "#4a1a6e",
  },
];

export const inclusions = [
  "Both side Train Fare.",
  "River Rafting",
  "DJ Nights INCLUDED in this package.",
  "All meals are mentioned as per the itinerary.",
  "Overnight journey water will be provided in the bus.",
  "Safe & Comfortable Journey in a 26-Seater Tempo Traveller",
  "Accomodation in 3/4 star hotel on Quad sharing basis.",
  "All transfer and sightseeing.",
  "All toll taxes, Parking charges, and Driver allowance.",
];

export const terms = [
  "The booking amount is non-refundable and non-transferable.",
  "Full payment of the tour cost must be made before the trip begins. Failure to do so may result in cancellation of the booking.",
  "Only the traveler(s) whose names are mentioned at the time of booking will be permitted to travel. Booking transfers are not allowed.",
  "Every traveler must carry a valid Government-issued photo ID. Boarding will not be permitted without a valid ID.",
  "Travelers must report to the designated boarding point 30 minutes prior to the scheduled departure. Departure timings are fixed, and no refund will be provided if a traveler misses the departure.",
  "Hotels mentioned in the itinerary are indicative and subject to availability. In case of unavailability or operational requirements, Wanderworld Holidays reserves the right to provide accommodation in similar-category hotels offering comparable standards and services without prior notice or additional liability.",
  "Wanderworld Holidays reserves the right to modify the itinerary, accommodation, or tour schedule due to force majeure or unforeseen circumstances such as weather conditions, natural disasters, landslides, political disturbances, accidents, transport delays, vehicle breakdowns, or any other circumstances beyond the company's control.",
  "No refund will be provided for any sightseeing, activity, meal, accommodation, or other tour inclusion that is cancelled or not availed due to bad weather, operational reasons, unavoidable circumstances, or by the traveler's own choice.",
  "Wanderworld Holidays shall not be responsible for any additional expenses arising from unforeseen circumstances beyond its control.",
  "Travelers are responsible for the safety of their luggage and personal belongings. The company shall not be liable for any loss, theft, or damage.",
  "Air conditioning in the vehicle may be switched off in hilly areas or whenever required by the driver for the safety and comfort of passengers.",
  "Any act of misconduct, indiscipline, or inappropriate behaviour may result in immediate termination of the tour without any refund.",
  "Wanderworld Holidays does not provide travel or medical insurance. Travelers are advised to arrange their own insurance, if required.",
  "By participating in the tour, travelers grant Wanderworld Holidays permission to capture and use photographs and videos taken during the trip for promotional, marketing, and social media purposes without any additional consent or compensation.",
  "By confirming the booking, the traveler acknowledges that they have read, understood, and agreed to all the above Terms & Conditions.",
];

export const installments = ["₹. 5000", "₹. 5000", "₹. 7499"];
