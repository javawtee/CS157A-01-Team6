// user

('M2206', 'john@gmail.com', sha2('123456Ab', 0),'2019-04-10 00:00:00', 'John', 'McGinley', 'P', '1997-04-01', '123 Fake Street'),
('M2207', 'kunda@gmail.com', sha2('123456Ab', 0),'2014-06-11 00:00:00', 'Tyler', 'Daas', 'D', '1997-04-01', '1203 20th Street'),
('M2208', 'tee@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Thong', 'Le', 'Q', '1992-05-07', '1203 Austin Street'),
('M2209', 'jake@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Kunda', 'Wu', 'P', '1997-04-01', '1203 Kim Street'),
('M2210', 'blake@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'John', 'Wu',  'R', '1997-04-01', '1203 Rut Street'),
('M2211', 'rock@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Rock', 'Lee', 'N', '1997-04-01', '13 7th Street'),
('M2212', 'kyle@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Kyle', 'Hertsch', 'A', '1997-04-01', '123 8th Street'),
('M2213', 'andre@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Andre', 'Giant','R', '1997-04-01', '143 first Street'),
('M2214', 'blake@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00','Blake', 'Bortles', 'C', '1997-04-01', '101 West Adams St'),
('M2215', 'doug@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Doug', 'Adams', 'L', '1997-04-01', '927 Hamilton St'),
('M2216', 'juan@gmail.com', sha2('123456Ab', 0),'2019-04-01', 'Juan', 'Lopez', 'D', '1997-04-01', '940 Black St'),
('M2217', 'tim@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Tim', 'Allen', 'Q', '1997-04-01', '409 Market St'),
('M2218', 'tyler@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Tyler', 'Adams', 'C', '1997-04-01', '440 Telegraph Ave'),
('M2219', 'maria@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Maria', 'Ramirez', 'D', '1997-04-01', '904 Test Dr'),
('M2220', 'ramirez@gmail.com', sha2('123456Ab', 0),'2019-04-01 00:00:00', 'Kim', 'Ramirez', 'S', '1997-04-01', '753 Edde St');

// preference
insert into preference (flight_time, max_price) values ('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00),
('all', 500.00);

// reserve
('M2206', 'ABC01', '2019-02-01 00:00:00', 'success'), 
('M2207', 'ABC02', '2019-02-06 00:00:00', 'success'), 
('M2208', 'VBA03', '2019-09-10 00:00:00', 'success'), 
('M2209', 'HGF04', '2015-10-10 00:00:00', 'success'), 
('M2210', 'JKN05', '2014-01-10 00:00:00', 'success'), 
('M2211', 'KIK06', '2011-10-10 00:00:00', 'success'), 
('M2212', 'HIG07', '2013-10-10 00:00:00', 'success'), 
('M2213', 'UIU08', '2019-10-10 00:00:00', 'success'), 
('M2214', 'KIL09', '2019-10-1, 00:00:00', 'success'), 
('M2215', 'KIJ10', '2019-10-02 00:00:00', 'success'), 
('M2216', 'WAS11', '2019-10-03 00:00:00', 'success'), 
('M2217', 'KLO12', '2019-10-04 00:00:00', 'success'), 
('M2218', 'LOP13', '2019-10-06 00:00:00', 'success'), 
('M2219', 'POP14', '2019-11-03 00:00:00', 'success'), 
('M2220', 'PUSH1',' 2019-10-25 00:00:00', 'success'); 

// flight
// flight(flight_id, departure_datetime, depart_from, arrival_datetime, arrive_to, flight_status [onboarding|delay|postponed|ready|departed|arrived])
(1, '2019-05-29 08:00:00', 'San Jose', '2019-05-29 10:00:00', 'Las Vegas', 'arrived'),
(2, '2019-05-29 15:00:00', 'Las Vegas', '2019-05-29 17:00:00', 'San Jose', 'arrived'),
(3, '2019-05-29 15:00:00', 'San Francisco', '2019-05-29 17:00:00', 'Las Vegas', 'arrived'),
(4, '2019-05-29 17:00:00', 'New York City', '2019-05-29 21:00:00', 'Las Vegas', 'arrived'),
(5, '2019-05-29 08:00:00', 'San Jose', '2019-05-29 10:00:00', 'New York City', 'arrived'),
(6, '2019-05-29 08:00:00', 'San Jose', '2019-05-29 09:30:00', 'Las Vegas', 'arrived'),
(7, '2019-05-29 09:00:00', 'BeiJing', '2019-05-29 10:00:00', 'Las Vegas', 'arrived'),
(8, '2019-05-29 18:00:00', 'San Jose', '2019-05-29 20:00:00', 'Las Vegas', 'arrived'),
(9, '2019-05-29 16:00:00', 'Los Angles', '2019-05-29 18:00:00', 'Las Vegas', 'arrived'),
(10, '2019-05-29 15:00:00', 'San Jose', '2019-05-29 20:00:00', 'Las Vegas', 'arrived'),
(11, '2019-05-29 08:00:00', 'San Jose', '2019-05-29 10:00:00', 'Las Vegas', 'arrived'),
(12, '2019-05-29 10:00:00', 'Beijing', '2019-05-29 12:00:00', 'Las Vegas', 'arrived'),
(13, '2019-05-29 12:00:00', 'Los Angles', '2019-05-29 13:00:00', 'Las Vegas', 'arrived'),
(14, '2019-05-29 15:00:00', 'New York City', '2019-05-29 14:00:00', 'Las Vegas', 'arrived'),
(15, '2019-05-29 16:00:00', 'San Jose', '2019-05-29 17:00:00', 'Las Vegas', 'arrived');


// plane
(919304, 300, 'OK'),
(113304, 80, 'Repairing'),
(329304, 200, 'OK'),
(519404, 150, 'OK'),
(222332, 300, 'OK'),
(592013, 80, 'Repairing'),
(590192, 300, 'Repairing'),
(482901, 150, 'Repairing'),
(492012, 300, 'OK'),
(919323, 200, 'Repairing'),
(10, 300, 'Repairing'),
(11, 150, 'OK'),
(12, 300, 'OK'),
(13, 300, 'Repairing'),
(14, 200, 'Repairing'),
(15, 300, 'OK');

// ticket
// ticket(ticket_id, ticket_class, ticket_price, ticket_quantity, ticket_status [available|unavailable])
(1, 'economic', 1000, 60, 'unavailable'),
(2, 'business', 1400, 20, 'available'),
(3,  'economic', 1000, 60, 'unavailable'),
(4, 'business', 1400, 20, 'available'),
(5, 'economic', 1000, 60, 'available'),
(6, 'business', 1400, 20, 'unavailable'),
(7,  'economic', 1000, 60, 'available'),
(8, 'business', 1400, 20, 'unavailable'),
(9,  'economic', 1000, 60, 'unavailable'),
(10, 'business', 1400, 20, 'unavailable'),
(11,  'economic', 1000, 60, 'available'),
(12,  'business', 1400, 200, 'available'),
(13,  'economic', 1000, 60, 'available'),
(14,  'business', 1400, 20, 'unavailable'),
(15, 'economic', 1000, 60, 'available');

// airport
// airport (city, airport_name,  address)
('San Francisco', 'SFO', '0101 San francisco'),
('San Jose', 'SJC', '1111 San Jose'),
('New York', 'NYC', '1231 New York'),
('Los angeles', 'LAX', '12334 Los angeles'),
('Beijing', 'BEJ', '1231 Beijing'),
('Haikou', 'MeiLan Airport', '0101 Hainan'),
('GuangZhou', 'Baiyun Airport', '0101 GuangZhou'),
('Los Vegas', 'LAC', '0101 Los angeles'),
('San Francisco', 'SFO Airport', '0101 San francisco'),
('New York', 'JFK Airport', '0101 New York'),
('Boston', 'New York Airport', '0101 Boston'),
('Miami', 'Miami Airport', '0101 miami'),
('Portland',  'Portland Airport', '0101 portland'),
('Boston', 'Boston Airport', '0101 Boston'),
('Honolulu', 'Honolulu Airport', '0101 Atlanta');

// user has preference
('M2206', 1), 
('M2207', 2), 
('M2208', 3), 
('M2209', 4), 
('M2210', 5), 
('M2211', 6), 
('M2212', 7), 
('M2213', 8), 
('M2214', 9), 
('M2215', 10), 
('M2216', 11), 
('M2217', 12), 
('M2218', 13), 
('M2219', 14), 
('M2220', 15); 

// plane_usedfor_flight and ticket_of_flight
(1, 1),
(1, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);

// flight_fromto_airport (flight_id, airport_name, gate_number)
(1, 'SJC', 'G01', 'depart'),
(2, 'SF', 'B02', 'depart'),
(3, 'WA', 'S03', 'depart'),
(4, 'NYC', 'A04', 'depart'),
(5, 'LAX', 'C05', 'depart'),
(6, 'BEJ', 'D05', 'depart'),
(7, 'SJC', 'S02', 'depart'),
(8, 'SF', 'A07', 'depart'),
(9, 'NYC', 'E04', 'depart'),
(10, 'NYC', 'E05', 'depart'),
(11, 'LA', 'B06', 'depart'),
(12, 'BJ', 'A08', 'depart'),
(13, 'SJC', 'C10', 'depart'),
(14, 'SF', 'D02', 'depart'),
(15, 'WA', 'C09', 'depart');



