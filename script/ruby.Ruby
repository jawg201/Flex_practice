def element_times_index(numbers)
	i = 0
    holder = []

    while i < numbers.length
        holder << numbers[i] *= i

        i += 1
    end
  return holder
end

print element_times_index([4, 7, 6, 5])       # => [0, 7, 12, 15]
puts
print element_times_index([1, 1, 1, 1, 1, 1]) # => [0, 1, 2, 3, 4, 5]
