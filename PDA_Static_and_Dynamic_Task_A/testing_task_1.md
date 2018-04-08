### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    # checkforAce should use snake case and lower case e.g. check_for_ace
    if card.value = 1
      # Conditionals require  == not = e.g. if card1.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # dif should be def there should also be a comma between parameters e.g. def highest_card(card1, card2)
  if card1.value > card2.value
    return card.name
    # no method called name for card object.
    # Should return card1
  else
    card2
    # no return and the card2 object is returned.
  end
end
end
# Erroneous end.

def self.cards_total(cards)
  total
  # total should be set to an integer value of 0 e.g. total = 0
  for card in cards
    total += card.value
    # for loop should be ended or each iteration will be returned.
    return "You have a total of" + total
    # total is an integer value and there is no space between of and total.
    # Could be "You have a total of " + total.to_s
  end
end

# end of class definition required.
```
