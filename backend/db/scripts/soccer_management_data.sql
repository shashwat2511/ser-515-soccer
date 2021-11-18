INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (3, 1, 9, 13, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (4, 1, 9, 13, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (21, 1, 9, 13, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (22, 1, 9, 13, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (23, 1, 9, 13, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (13, 1, 14, 17, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (14, 1, 14, 17, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (15, 1, 14, 17, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (16, 1, 14, 17, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (19, 1, 14, 17, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (20, 1, 14, 17, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (1, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (2, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (9, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (10, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (11, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (12, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (17, 1, 18, 45, true);
INSERT INTO public.grounds_fields (ground_number, field_id, age_start, age_end, is_active) VALUES (18, 1, 18, 45, true);



INSERT INTO public.match (match_id, team_1_id, team_2_id, ground_number, team_1_goal, team_2_goal, match_date, match_time, tournament_id, match_age_group, match_gender, match_division, match_result, match_stage, field_id) VALUES (43, 2, 1, '1', NULL, NULL, '2021-12-15', '09:00:00', 1, 20, 'M', 'Red', NULL, 'group', 1);
INSERT INTO public.match (match_id, team_1_id, team_2_id, ground_number, team_1_goal, team_2_goal, match_date, match_time, tournament_id, match_age_group, match_gender, match_division, match_result, match_stage, field_id) VALUES (44, 3, 4, '1', NULL, NULL, '2021-12-15', '10:05:00', 1, 20, 'M', 'Red', NULL, 'group', 1);
INSERT INTO public.match (match_id, team_1_id, team_2_id, ground_number, team_1_goal, team_2_goal, match_date, match_time, tournament_id, match_age_group, match_gender, match_division, match_result, match_stage, field_id) VALUES (45, 5, 11, '1', NULL, NULL, '2021-12-15', '11:10:00', 1, 20, 'M', 'Red', NULL, 'group', 1);
INSERT INTO public.match (match_id, team_1_id, team_2_id, ground_number, team_1_goal, team_2_goal, match_date, match_time, tournament_id, match_age_group, match_gender, match_division, match_result, match_stage, field_id) VALUES (46, 6, 7, '2', NULL, NULL, '2021-12-15', '09:00:00', 1, 20, 'M', 'Blue', NULL, 'group', 1);
INSERT INTO public.match (match_id, team_1_id, team_2_id, ground_number, team_1_goal, team_2_goal, match_date, match_time, tournament_id, match_age_group, match_gender, match_division, match_result, match_stage, field_id) VALUES (47, 8, 9, '2', NULL, NULL, '2021-12-15', '10:05:00', 1, 20, 'M', 'Blue', NULL, 'group', 1);
INSERT INTO public.match (match_id, team_1_id, team_2_id, ground_number, team_1_goal, team_2_goal, match_date, match_time, tournament_id, match_age_group, match_gender, match_division, match_result, match_stage, field_id) VALUES (48, 10, 12, '2', NULL, NULL, '2021-12-15', '11:10:00', 1, 20, 'M', 'Blue', NULL, 'group', 1);





INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (1, 'Team_1', 'M', 20, 'Red', 'Shashwat', 'Tempe', 'AZ', 'Shashwat Club', 1234567890, '/uploaded_files/Team1.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (2, 'Team_2', 'M', 20, 'Red', 'Aish', 'Tempe', 'AZ', 'Aish Club', 1234567890, '/uploaded_files/Team2.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (3, 'Team_3', 'M', 20, 'Red', 'Deepak', 'Tempe', 'AZ', 'Deepak Club', 1234567890, '/uploaded_files/Team3.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (4, 'Team_4', 'M', 20, 'Red', 'Kenil', 'Tempe', 'AZ', 'Kenil Club', 1234567890, '/uploaded_files/Team4.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (5, 'Team_5', 'M', 20, 'Red', 'Hari', 'Tempe', 'AZ', 'hari Club', 1234567890, '/uploaded_files/Team5.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (6, 'Team_6', 'M', 20, 'Red', 'John', 'Tempe', 'AZ', 'John Club', 1234567890, '/uploaded_files/Team6.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (7, 'Team_7', 'M', 20, 'Red', 'Roy', 'Tempe', 'AZ', 'Roy Club', 1234567890, '/uploaded_files/Team7.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (8, 'Team_8', 'M', 20, 'Red', 'Bob', 'Tempe', 'AZ', 'Bob Club', 1234567890, '/uploaded_files/Team8.pdf', true);





INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (6, 'Team_6', 'M', 20, 'Blue', 'Shashwat', 'Tempe', 'AZ', 'Shashwat Club', 1234567890, '/uploaded_files/Team6.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (7, 'Team_7', 'M', 20, 'Blue', 'Aish', 'Tempe', 'AZ', 'Aish Club', 1234567890, '/uploaded_files/Team7.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (8, 'Team_8', 'M', 20, 'Blue', 'Deepak', 'Tempe', 'AZ', 'Deepak Club', 1234567890, '/uploaded_files/Team8.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (9, 'Team_9', 'M', 20, 'Blue', 'Kenil', 'Tempe', 'AZ', 'Kenil Club', 1234567890, '/uploaded_files/Team9.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (10, 'Team_10', 'M', 20, 'Blue', 'Hari', 'Tempe', 'AZ', 'hari Club', 1234567890, '/uploaded_files/Team10.pdf', true);
INSERT INTO public.teams (team_id, team_name, gender, age_group, division, coach_name, team_city, team_state, club_name, primary_contact, team_details_file_path, is_active) VALUES (12, 'Team_12', 'M', 20, 'Blue', 'Michael', 'Tempe', 'AZ', 'Michael Club', 1234567890, '/uploaded_files/Team12.pdf', true);


