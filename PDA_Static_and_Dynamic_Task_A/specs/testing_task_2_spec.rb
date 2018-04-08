require('minitest/autorun')
require('minitest/rg')

require_relative('../card.rb')
require_relative('../testing_task_2')

class TestCardGame < Minitest::Test


def setup
  @card1 = Card.new('spades', 3)
  @card2 = Card.new('hearts', 1)
  @card3 = Card.new('diamonds', 10)

  @card_game1 = CardGame.new()

  @cards = [@card1, @card2, @card3]
end

def test_check_for_ace__true()
  result = @card_game1.check_for_ace(@card2)
  assert_equal(true, result)
end

def test_check_for_ace__false()
  result = @card_game1.check_for_ace(@card1)
  assert_equal(false, result)
end

def test_highest_card
  result = @card_game1.highest_card(@card1, @card3)
  assert_equal(@card3, result)
end

def test_cards_total
  result = CardGame.cards_total(@cards)
  expected_result = "You have a total of 14"
  assert_equal(expected_result, result)
end



end
