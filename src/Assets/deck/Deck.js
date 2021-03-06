const deck = [
    {rank: 'ace', suit: 'spades', value: 11, id: 'AS', deck: 1},
    {rank: '2', suit: 'spades', value: 2, id: '2S', deck: 1},
    {rank: '3', suit: 'spades', value: 3, id: '3S', deck: 1},
    {rank: '4', suit: 'spades', value: 4, id: '4S', deck: 1},
    {rank: '5', suit: 'spades', value: 5, id: '5S', deck: 1},
    {rank: '6', suit: 'spades', value: 6, id: '6S', deck: 1},
    {rank: '7', suit: 'spades', value: 7, id: '7S', deck: 1},
    {rank: '8', suit: 'spades', value: 8, id: '8S', deck: 1},
    {rank: '9', suit: 'spades', value: 9, id: '9S', deck: 1},
    {rank: '10', suit: 'spades', value: 10, id: '10S', deck: 1},
    {rank: 'jack', suit: 'spades', value: 10, id: 'JS', deck: 1},
    {rank: 'queen', suit: 'spades', value: 10, id: 'QS', deck: 1},
    {rank: 'king', suit: 'spades', value: 10, id: 'KS', deck: 1},
    {rank: 'ace', suit: 'hearts', value: 11, id: 'AH', deck: 1},
    {rank: '2', suit: 'hearts', value: 2, id: '2H', deck: 1},
    {rank: '3', suit: 'hearts', value: 3, id: '3H', deck: 1},
    {rank: '4', suit: 'hearts', value: 4, id: '4H', deck: 1},
    {rank: '5', suit: 'hearts', value: 5, id: '5H', deck: 1},
    {rank: '6', suit: 'hearts', value: 6, id: '6H', deck: 1},
    {rank: '7', suit: 'hearts', value: 7, id: '7H', deck: 1},
    {rank: '8', suit: 'hearts', value: 8, id: '8H', deck: 1},
    {rank: '9', suit: 'hearts', value: 9, id: '9H', deck: 1},
    {rank: '10', suit: 'hearts', value: 10, id: '10H', deck: 1},
    {rank: 'jack', suit: 'hearts', value: 10, id: 'JH', deck: 1},
    {rank: 'queen', suit: 'hearts', value: 10, id: 'QH', deck: 1},
    {rank: 'king', suit: 'hearts', value: 10, id: 'KH', deck: 1},
    {rank: 'ace', suit: 'diamonds', value: 11, id: 'AD', deck: 1},
    {rank: '2', suit: 'diamonds', value: 2, id: '2D', deck: 1},
    {rank: '3', suit: 'diamonds', value: 3, id: '3D', deck: 1},
    {rank: '4', suit: 'diamonds', value: 4, id: '4D', deck: 1},
    {rank: '5', suit: 'diamonds', value: 5, id: '5D', deck: 1},
    {rank: '6', suit: 'diamonds', value: 6, id: '6D', deck: 1},
    {rank: '7', suit: 'diamonds', value: 7, id: '7D', deck: 1},
    {rank: '8', suit: 'diamonds', value: 8, id: '8D', deck: 1},
    {rank: '9', suit: 'diamonds', value: 9, id: '9D', deck: 1},
    {rank: '10', suit: 'diamonds', value: 10, id: '10D', deck: 1},
    {rank: 'jack', suit: 'diamonds', value: 10, id: 'JD', deck: 1},
    {rank: 'queen', suit: 'diamonds', value: 10, id: 'QD', deck: 1},
    {rank: 'king', suit: 'diamonds', value: 10, id: 'KD', deck: 1},
    {rank: 'ace', suit: 'clubs', value: 11, id: 'AC', deck: 1},
    {rank: '2', suit: 'clubs', value: 2, id: '2C', deck: 1},
    {rank: '3', suit: 'clubs', value: 3, id: '3C', deck: 1},
    {rank: '4', suit: 'clubs', value: 4, id: '4C', deck: 1},
    {rank: '5', suit: 'clubs', value: 5, id: '5C', deck: 1},
    {rank: '6', suit: 'clubs', value: 6, id: '6C', deck: 1},
    {rank: '7', suit: 'clubs', value: 7, id: '7C', deck: 1},
    {rank: '8', suit: 'clubs', value: 8, id: '8C', deck: 1},
    {rank: '9', suit: 'clubs', value: 9, id: '9C', deck: 1},
    {rank: '10', suit: 'clubs', value: 10, id: '10C', deck: 1},
    {rank: 'jack', suit: 'clubs', value: 10, id: 'JC', deck: 1},
    {rank: 'queen', suit: 'clubs', value: 10, id: 'QC', deck: 1},
    {rank: 'king', suit: 'clubs', value: 10, id: 'KC', deck: 1},

    {rank: 'ace', suit: 'spades', value: 11, id: 'AS', deck: 2},
    {rank: '2', suit: 'spades', value: 2, id: '2S', deck: 2},
    {rank: '3', suit: 'spades', value: 3, id: '3S', deck: 2},
    {rank: '4', suit: 'spades', value: 4, id: '4S', deck: 2},
    {rank: '5', suit: 'spades', value: 5, id: '5S', deck: 2},
    {rank: '6', suit: 'spades', value: 6, id: '6S', deck: 2},
    {rank: '7', suit: 'spades', value: 7, id: '7S', deck: 2},
    {rank: '8', suit: 'spades', value: 8, id: '8S', deck: 2},
    {rank: '9', suit: 'spades', value: 9, id: '9S', deck: 2},
    {rank: '10', suit: 'spades', value: 10, id: '10S', deck: 2},
    {rank: 'jack', suit: 'spades', value: 10, id: 'JS', deck: 2},
    {rank: 'queen', suit: 'spades', value: 10, id: 'QS', deck: 2},
    {rank: 'king', suit: 'spades', value: 10, id: 'KS', deck: 2},
    {rank: 'ace', suit: 'hearts', value: 11, id: 'AH', deck: 2},
    {rank: '2', suit: 'hearts', value: 2, id: '2H', deck: 2},
    {rank: '3', suit: 'hearts', value: 3, id: '3H', deck: 2},
    {rank: '4', suit: 'hearts', value: 4, id: '4H', deck: 2},
    {rank: '5', suit: 'hearts', value: 5, id: '5H', deck: 2},
    {rank: '6', suit: 'hearts', value: 6, id: '6H', deck: 2},
    {rank: '7', suit: 'hearts', value: 7, id: '7H', deck: 2},
    {rank: '8', suit: 'hearts', value: 8, id: '8H', deck: 2},
    {rank: '9', suit: 'hearts', value: 9, id: '9H', deck: 2},
    {rank: '10', suit: 'hearts', value: 10, id: '10H', deck: 2},
    {rank: 'jack', suit: 'hearts', value: 10, id: 'JH', deck: 2},
    {rank: 'queen', suit: 'hearts', value: 10, id: 'QH', deck: 2},
    {rank: 'king', suit: 'hearts', value: 10, id: 'KH', deck: 2},
    {rank: 'ace', suit: 'diamonds', value: 11, id: 'AD', deck: 2},
    {rank: '2', suit: 'diamonds', value: 2, id: '2D', deck: 2},
    {rank: '3', suit: 'diamonds', value: 3, id: '3D', deck: 2},
    {rank: '4', suit: 'diamonds', value: 4, id: '4D', deck: 2},
    {rank: '5', suit: 'diamonds', value: 5, id: '5D', deck: 2},
    {rank: '6', suit: 'diamonds', value: 6, id: '6D', deck: 2},
    {rank: '7', suit: 'diamonds', value: 7, id: '7D', deck: 2},
    {rank: '8', suit: 'diamonds', value: 8, id: '8D', deck: 2},
    {rank: '9', suit: 'diamonds', value: 9, id: '9D', deck: 2},
    {rank: '10', suit: 'diamonds', value: 10, id: '10D', deck: 2},
    {rank: 'jack', suit: 'diamonds', value: 10, id: 'JD', deck: 2},
    {rank: 'queen', suit: 'diamonds', value: 10, id: 'QD', deck: 2},
    {rank: 'king', suit: 'diamonds', value: 10, id: 'KD', deck: 2},
    {rank: 'ace', suit: 'clubs', value: 11, id: 'AC', deck: 2},
    {rank: '2', suit: 'clubs', value: 2, id: '2C', deck: 2},
    {rank: '3', suit: 'clubs', value: 3, id: '3C', deck: 2},
    {rank: '4', suit: 'clubs', value: 4, id: '4C', deck: 2},
    {rank: '5', suit: 'clubs', value: 5, id: '5C', deck: 2},
    {rank: '6', suit: 'clubs', value: 6, id: '6C', deck: 2},
    {rank: '7', suit: 'clubs', value: 7, id: '7C', deck: 2},
    {rank: '8', suit: 'clubs', value: 8, id: '8C', deck: 2},
    {rank: '9', suit: 'clubs', value: 9, id: '9C', deck: 2},
    {rank: '10', suit: 'clubs', value: 10, id: '10C', deck: 2},
    {rank: 'jack', suit: 'clubs', value: 10, id: 'JC', deck: 2},
    {rank: 'queen', suit: 'clubs', value: 10, id: 'QC', deck: 2},
    {rank: 'king', suit: 'clubs', value: 10, id: 'KC', deck: 2},

    {rank: 'ace', suit: 'spades', value: 11, id: 'AS', deck: 3},
    {rank: '2', suit: 'spades', value: 2, id: '2S', deck: 3},
    {rank: '3', suit: 'spades', value: 3, id: '3S', deck: 3},
    {rank: '4', suit: 'spades', value: 4, id: '4S', deck: 3},
    {rank: '5', suit: 'spades', value: 5, id: '5S', deck: 3},
    {rank: '6', suit: 'spades', value: 6, id: '6S', deck: 3},
    {rank: '7', suit: 'spades', value: 7, id: '7S', deck: 3},
    {rank: '8', suit: 'spades', value: 8, id: '8S', deck: 3},
    {rank: '9', suit: 'spades', value: 9, id: '9S', deck: 3},
    {rank: '10', suit: 'spades', value: 10, id: '10S', deck: 3},
    {rank: 'jack', suit: 'spades', value: 10, id: 'JS', deck: 3},
    {rank: 'queen', suit: 'spades', value: 10, id: 'QS', deck: 3},
    {rank: 'king', suit: 'spades', value: 10, id: 'KS', deck: 3},
    {rank: 'ace', suit: 'hearts', value: 11, id: 'AH', deck: 3},
    {rank: '2', suit: 'hearts', value: 2, id: '2H', deck: 3},
    {rank: '3', suit: 'hearts', value: 3, id: '3H', deck: 3},
    {rank: '4', suit: 'hearts', value: 4, id: '4H', deck: 3},
    {rank: '5', suit: 'hearts', value: 5, id: '5H', deck: 3},
    {rank: '6', suit: 'hearts', value: 6, id: '6H', deck: 3},
    {rank: '7', suit: 'hearts', value: 7, id: '7H', deck: 3},
    {rank: '8', suit: 'hearts', value: 8, id: '8H', deck: 3},
    {rank: '9', suit: 'hearts', value: 9, id: '9H', deck: 3},
    {rank: '10', suit: 'hearts', value: 10, id: '10H', deck: 3},
    {rank: 'jack', suit: 'hearts', value: 10, id: 'JH', deck: 3},
    {rank: 'queen', suit: 'hearts', value: 10, id: 'QH', deck: 3},
    {rank: 'king', suit: 'hearts', value: 10, id: 'KH', deck: 3},
    {rank: 'ace', suit: 'diamonds', value: 11, id: 'AD', deck: 3},
    {rank: '2', suit: 'diamonds', value: 2, id: '2D', deck: 3},
    {rank: '3', suit: 'diamonds', value: 3, id: '3D', deck: 3},
    {rank: '4', suit: 'diamonds', value: 4, id: '4D', deck: 3},
    {rank: '5', suit: 'diamonds', value: 5, id: '5D', deck: 3},
    {rank: '6', suit: 'diamonds', value: 6, id: '6D', deck: 3},
    {rank: '7', suit: 'diamonds', value: 7, id: '7D', deck: 3},
    {rank: '8', suit: 'diamonds', value: 8, id: '8D', deck: 3},
    {rank: '9', suit: 'diamonds', value: 9, id: '9D', deck: 3},
    {rank: '10', suit: 'diamonds', value: 10, id: '10D', deck: 3},
    {rank: 'jack', suit: 'diamonds', value: 10, id: 'JD', deck: 3},
    {rank: 'queen', suit: 'diamonds', value: 10, id: 'QD', deck: 3},
    {rank: 'king', suit: 'diamonds', value: 10, id: 'KD', deck: 3},
    {rank: 'ace', suit: 'clubs', value: 11, id: 'AC', deck: 3},
    {rank: '2', suit: 'clubs', value: 2, id: '2C', deck: 3},
    {rank: '3', suit: 'clubs', value: 3, id: '3C', deck: 3},
    {rank: '4', suit: 'clubs', value: 4, id: '4C', deck: 3},
    {rank: '5', suit: 'clubs', value: 5, id: '5C', deck: 3},
    {rank: '6', suit: 'clubs', value: 6, id: '6C', deck: 3},
    {rank: '7', suit: 'clubs', value: 7, id: '7C', deck: 3},
    {rank: '8', suit: 'clubs', value: 8, id: '8C', deck: 3},
    {rank: '9', suit: 'clubs', value: 9, id: '9C', deck: 3},
    {rank: '10', suit: 'clubs', value: 10, id: '10C', deck: 3},
    {rank: 'jack', suit: 'clubs', value: 10, id: 'JC', deck: 3},
    {rank: 'queen', suit: 'clubs', value: 10, id: 'QC', deck: 3},
    {rank: 'king', suit: 'clubs', value: 10, id: 'KC', deck: 3},

    {rank: 'ace', suit: 'spades', value: 11, id: 'AS', deck: 4},
    {rank: '2', suit: 'spades', value: 2, id: '2S', deck: 4},
    {rank: '3', suit: 'spades', value: 3, id: '3S', deck: 4},
    {rank: '4', suit: 'spades', value: 4, id: '4S', deck: 4},
    {rank: '5', suit: 'spades', value: 5, id: '5S', deck: 4},
    {rank: '6', suit: 'spades', value: 6, id: '6S', deck: 4},
    {rank: '7', suit: 'spades', value: 7, id: '7S', deck: 4},
    {rank: '8', suit: 'spades', value: 8, id: '8S', deck: 4},
    {rank: '9', suit: 'spades', value: 9, id: '9S', deck: 4},
    {rank: '10', suit: 'spades', value: 10, id: '10S', deck: 4},
    {rank: 'jack', suit: 'spades', value: 10, id: 'JS', deck: 4},
    {rank: 'queen', suit: 'spades', value: 10, id: 'QS', deck: 4},
    {rank: 'king', suit: 'spades', value: 10, id: 'KS', deck: 4},
    {rank: 'ace', suit: 'hearts', value: 11, id: 'AH', deck: 4},
    {rank: '2', suit: 'hearts', value: 2, id: '2H', deck: 4},
    {rank: '3', suit: 'hearts', value: 3, id: '3H', deck: 4},
    {rank: '4', suit: 'hearts', value: 4, id: '4H', deck: 4},
    {rank: '5', suit: 'hearts', value: 5, id: '5H', deck: 4},
    {rank: '6', suit: 'hearts', value: 6, id: '6H', deck: 4},
    {rank: '7', suit: 'hearts', value: 7, id: '7H', deck: 4},
    {rank: '8', suit: 'hearts', value: 8, id: '8H', deck: 4},
    {rank: '9', suit: 'hearts', value: 9, id: '9H', deck: 4},
    {rank: '10', suit: 'hearts', value: 10, id: '10H', deck: 4},
    {rank: 'jack', suit: 'hearts', value: 10, id: 'JH', deck: 4},
    {rank: 'queen', suit: 'hearts', value: 10, id: 'QH', deck: 4},
    {rank: 'king', suit: 'hearts', value: 10, id: 'KH', deck: 4},
    {rank: 'ace', suit: 'diamonds', value: 11, id: 'AD', deck: 4},
    {rank: '2', suit: 'diamonds', value: 2, id: '2D', deck: 4},
    {rank: '3', suit: 'diamonds', value: 3, id: '3D', deck: 4},
    {rank: '4', suit: 'diamonds', value: 4, id: '4D', deck: 4},
    {rank: '5', suit: 'diamonds', value: 5, id: '5D', deck: 4},
    {rank: '6', suit: 'diamonds', value: 6, id: '6D', deck: 4},
    {rank: '7', suit: 'diamonds', value: 7, id: '7D', deck: 4},
    {rank: '8', suit: 'diamonds', value: 8, id: '8D', deck: 4},
    {rank: '9', suit: 'diamonds', value: 9, id: '9D', deck: 4},
    {rank: '10', suit: 'diamonds', value: 10, id: '10D', deck: 4},
    {rank: 'jack', suit: 'diamonds', value: 10, id: 'JD', deck: 4},
    {rank: 'queen', suit: 'diamonds', value: 10, id: 'QD', deck: 4},
    {rank: 'king', suit: 'diamonds', value: 10, id: 'KD', deck: 4},
    {rank: 'ace', suit: 'clubs', value: 11, id: 'AC', deck: 4},
    {rank: '2', suit: 'clubs', value: 2, id: '2C', deck: 4},
    {rank: '3', suit: 'clubs', value: 3, id: '3C', deck: 4},
    {rank: '4', suit: 'clubs', value: 4, id: '4C', deck: 4},
    {rank: '5', suit: 'clubs', value: 5, id: '5C', deck: 4},
    {rank: '6', suit: 'clubs', value: 6, id: '6C', deck: 4},
    {rank: '7', suit: 'clubs', value: 7, id: '7C', deck: 4},
    {rank: '8', suit: 'clubs', value: 8, id: '8C', deck: 4},
    {rank: '9', suit: 'clubs', value: 9, id: '9C', deck: 4},
    {rank: '10', suit: 'clubs', value: 10, id: '10C', deck: 4},
    {rank: 'jack', suit: 'clubs', value: 10, id: 'JC', deck: 4},
    {rank: 'queen', suit: 'clubs', value: 10, id: 'QC', deck: 4},
    {rank: 'king', suit: 'clubs', value: 10, id: 'KC', deck: 4},

    {rank: 'ace', suit: 'spades', value: 11, id: 'AS', deck: 5},
    {rank: '2', suit: 'spades', value: 2, id: '2S', deck: 5},
    {rank: '3', suit: 'spades', value: 3, id: '3S', deck: 5},
    {rank: '4', suit: 'spades', value: 4, id: '4S', deck: 5},
    {rank: '5', suit: 'spades', value: 5, id: '5S', deck: 5},
    {rank: '6', suit: 'spades', value: 6, id: '6S', deck: 5},
    {rank: '7', suit: 'spades', value: 7, id: '7S', deck: 5},
    {rank: '8', suit: 'spades', value: 8, id: '8S', deck: 5},
    {rank: '9', suit: 'spades', value: 9, id: '9S', deck: 5},
    {rank: '10', suit: 'spades', value: 10, id: '10S', deck: 5},
    {rank: 'jack', suit: 'spades', value: 10, id: 'JS', deck: 5},
    {rank: 'queen', suit: 'spades', value: 10, id: 'QS', deck: 5},
    {rank: 'king', suit: 'spades', value: 10, id: 'KS', deck: 5},
    {rank: 'ace', suit: 'hearts', value: 11, id: 'AH', deck: 5},
    {rank: '2', suit: 'hearts', value: 2, id: '2H', deck: 5},
    {rank: '3', suit: 'hearts', value: 3, id: '3H', deck: 5},
    {rank: '4', suit: 'hearts', value: 4, id: '4H', deck: 5},
    {rank: '5', suit: 'hearts', value: 5, id: '5H', deck: 5},
    {rank: '6', suit: 'hearts', value: 6, id: '6H', deck: 5},
    {rank: '7', suit: 'hearts', value: 7, id: '7H', deck: 5},
    {rank: '8', suit: 'hearts', value: 8, id: '8H', deck: 5},
    {rank: '9', suit: 'hearts', value: 9, id: '9H', deck: 5},
    {rank: '10', suit: 'hearts', value: 10, id: '10H', deck: 5},
    {rank: 'jack', suit: 'hearts', value: 10, id: 'JH', deck: 5},
    {rank: 'queen', suit: 'hearts', value: 10, id: 'QH', deck: 5},
    {rank: 'king', suit: 'hearts', value: 10, id: 'KH', deck: 5},
    {rank: 'ace', suit: 'diamonds', value: 11, id: 'AD', deck: 5},
    {rank: '2', suit: 'diamonds', value: 2, id: '2D', deck: 5},
    {rank: '3', suit: 'diamonds', value: 3, id: '3D', deck: 5},
    {rank: '4', suit: 'diamonds', value: 4, id: '4D', deck: 5},
    {rank: '5', suit: 'diamonds', value: 5, id: '5D', deck: 5},
    {rank: '6', suit: 'diamonds', value: 6, id: '6D', deck: 5},
    {rank: '7', suit: 'diamonds', value: 7, id: '7D', deck: 5},
    {rank: '8', suit: 'diamonds', value: 8, id: '8D', deck: 5},
    {rank: '9', suit: 'diamonds', value: 9, id: '9D', deck: 5},
    {rank: '10', suit: 'diamonds', value: 10, id: '10D', deck: 5},
    {rank: 'jack', suit: 'diamonds', value: 10, id: 'JD', deck: 5},
    {rank: 'queen', suit: 'diamonds', value: 10, id: 'QD', deck: 5},
    {rank: 'king', suit: 'diamonds', value: 10, id: 'KD', deck: 5},
    {rank: 'ace', suit: 'clubs', value: 11, id: 'AC', deck: 5},
    {rank: '2', suit: 'clubs', value: 2, id: '2C', deck: 5},
    {rank: '3', suit: 'clubs', value: 3, id: '3C', deck: 5},
    {rank: '4', suit: 'clubs', value: 4, id: '4C', deck: 5},
    {rank: '5', suit: 'clubs', value: 5, id: '5C', deck: 5},
    {rank: '6', suit: 'clubs', value: 6, id: '6C', deck: 5},
    {rank: '7', suit: 'clubs', value: 7, id: '7C', deck: 5},
    {rank: '8', suit: 'clubs', value: 8, id: '8C', deck: 5},
    {rank: '9', suit: 'clubs', value: 9, id: '9C', deck: 5},
    {rank: '10', suit: 'clubs', value: 10, id: '10C', deck: 5},
    {rank: 'jack', suit: 'clubs', value: 10, id: 'JC', deck: 5},
    {rank: 'queen', suit: 'clubs', value: 10, id: 'QC', deck: 5},
    {rank: 'king', suit: 'clubs', value: 10, id: 'KC', deck: 5},

    {rank: 'ace', suit: 'spades', value: 11, id: 'AS', deck: 6},
    {rank: '2', suit: 'spades', value: 2, id: '2S', deck: 6},
    {rank: '3', suit: 'spades', value: 3, id: '3S', deck: 6},
    {rank: '4', suit: 'spades', value: 4, id: '4S', deck: 6},
    {rank: '5', suit: 'spades', value: 5, id: '5S', deck: 6},
    {rank: '6', suit: 'spades', value: 6, id: '6S', deck: 6},
    {rank: '7', suit: 'spades', value: 7, id: '7S', deck: 6},
    {rank: '8', suit: 'spades', value: 8, id: '8S', deck: 6},
    {rank: '9', suit: 'spades', value: 9, id: '9S', deck: 6},
    {rank: '10', suit: 'spades', value: 10, id: '10S', deck: 6},
    {rank: 'jack', suit: 'spades', value: 10, id: 'JS', deck: 6},
    {rank: 'queen', suit: 'spades', value: 10, id: 'QS', deck: 6},
    {rank: 'king', suit: 'spades', value: 10, id: 'KS', deck: 6},
    {rank: 'ace', suit: 'hearts', value: 11, id: 'AH', deck: 6},
    {rank: '2', suit: 'hearts', value: 2, id: '2H', deck: 6},
    {rank: '3', suit: 'hearts', value: 3, id: '3H', deck: 6},
    {rank: '4', suit: 'hearts', value: 4, id: '4H', deck: 6},
    {rank: '5', suit: 'hearts', value: 5, id: '5H', deck: 6},
    {rank: '6', suit: 'hearts', value: 6, id: '6H', deck: 6},
    {rank: '7', suit: 'hearts', value: 7, id: '7H', deck: 6},
    {rank: '8', suit: 'hearts', value: 8, id: '8H', deck: 6},
    {rank: '9', suit: 'hearts', value: 9, id: '9H', deck: 6},
    {rank: '10', suit: 'hearts', value: 10, id: '10H', deck: 6},
    {rank: 'jack', suit: 'hearts', value: 10, id: 'JH', deck: 6},
    {rank: 'queen', suit: 'hearts', value: 10, id: 'QH', deck: 6},
    {rank: 'king', suit: 'hearts', value: 10, id: 'KH', deck: 6},
    {rank: 'ace', suit: 'diamonds', value: 11, id: 'AD', deck: 6},
    {rank: '2', suit: 'diamonds', value: 2, id: '2D', deck: 6},
    {rank: '3', suit: 'diamonds', value: 3, id: '3D', deck: 6},
    {rank: '4', suit: 'diamonds', value: 4, id: '4D', deck: 6},
    {rank: '5', suit: 'diamonds', value: 5, id: '5D', deck: 6},
    {rank: '6', suit: 'diamonds', value: 6, id: '6D', deck: 6},
    {rank: '7', suit: 'diamonds', value: 7, id: '7D', deck: 6},
    {rank: '8', suit: 'diamonds', value: 8, id: '8D', deck: 6},
    {rank: '9', suit: 'diamonds', value: 9, id: '9D', deck: 6},
    {rank: '10', suit: 'diamonds', value: 10, id: '10D', deck: 6},
    {rank: 'jack', suit: 'diamonds', value: 10, id: 'JD', deck: 6},
    {rank: 'queen', suit: 'diamonds', value: 10, id: 'QD', deck: 6},
    {rank: 'king', suit: 'diamonds', value: 10, id: 'KD', deck: 6},
    {rank: 'ace', suit: 'clubs', value: 11, id: 'AC', deck: 6},
    {rank: '2', suit: 'clubs', value: 2, id: '2C', deck: 6},
    {rank: '3', suit: 'clubs', value: 3, id: '3C', deck: 6},
    {rank: '4', suit: 'clubs', value: 4, id: '4C', deck: 6},
    {rank: '5', suit: 'clubs', value: 5, id: '5C', deck: 6},
    {rank: '6', suit: 'clubs', value: 6, id: '6C', deck: 6},
    {rank: '7', suit: 'clubs', value: 7, id: '7C', deck: 6},
    {rank: '8', suit: 'clubs', value: 8, id: '8C', deck: 6},
    {rank: '9', suit: 'clubs', value: 9, id: '9C', deck: 6},
    {rank: '10', suit: 'clubs', value: 10, id: '10C', deck: 6},
    {rank: 'jack', suit: 'clubs', value: 10, id: 'JC', deck: 6},
    {rank: 'queen', suit: 'clubs', value: 10, id: 'QC', deck: 6},
    {rank: 'king', suit: 'clubs', value: 10, id: 'KC', deck: 6}
  ]

  export default deck;