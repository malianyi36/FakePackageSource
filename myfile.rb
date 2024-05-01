# frozen_string_literal: true

# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display

class UsersController < ActionController::Base
  def first_example
    # BAD: Unsanitized user input is used to construct a regular expression
    regex = /#{ params[:key] }/
  end

  def second_example
    # BAD: Unsanitized user input is used to construct a regular expression
    regex = Regexp.new(params[:key])
  end
end
