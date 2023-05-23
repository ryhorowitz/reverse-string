def reverse_string(str)
  # type your code in here
  result_arr = []
  string_arr = str.split("")
  len = str.size

  string_arr.each_with_index do |char, index|
    new_index = len - index
    result_arr[new_index] = char
  end

  result_arr.join
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string("hi")

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string("catbaby")

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
