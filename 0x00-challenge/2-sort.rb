###
#
#  Sort integer arguments (ascending) 
#
###

result = []
ARGV.each do |arg|
    # skip if not integer
    next if arg !~ /^-?[0-9]+$/

    # convert to integer
    i_arg = arg.to_i
    
    # insert result at the right position
    is_inserted = false
    n = 0
    l = result.size
    while !is_inserted && n < l do
        if result[n] > i_arg
            result.insert(n, i_arg)
            is_inserted = true
            break
        else
            n += 1
        end
    end
    result << i_arg if !is_inserted
end

puts result
