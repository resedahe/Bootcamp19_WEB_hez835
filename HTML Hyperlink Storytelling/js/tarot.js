
/* shuffle the card with animation effect and reset if needed */
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
$('#shuffle').click(function(){
	$('#past').toggleClass('shuffleActive');
    $('#present').toggleClass('shuffleActive');
    $('#future').toggleClass('shuffleActive');
    document.getElementById('past').src = "images/deckback2.jpg";
    document.getElementById('present').src = "images/deckback2.jpg";
    document.getElementById('future').src = "images/deckback2.jpg";
    $("p").empty();
 });

});
/*create a list of tarot cards*/
var cards = new Array ();
cards[0] = ['00_Fool',
	'The risks you have taken and your original thinking have brought you success. By doing things in a new way, you have allowed for great potential.',
	'At this moment, you are entering a new phase of life. The experience of this change may seem good or bad now, but its influence will be clearer in the future. Assessing the risks is crucial to making the right choice.',
	'In order to succeed, you must find new ways to bring about the achievement of your goals. When the opportunity comes, you must be willing to shed old habits and if it never comes, it may be time to create it for yourself with new methods.'];
cards[1] = ['01_Magician',
	'Your confidence and creativity have allowed you to effectively make your ideas into reality. You have found success through intelligence and skillful execution.',
	'Presently, there is a need for your knowledge and skills to influence the changes that are occuring. In order to make the changes beneficial, you must play your cards right.',
	'The future before you is uncertain, presenting both risk and opportunity. The possibilities will be influenced by the friendships you have nurtured and the support you have from those who are close. A triumph or creative success may bring about a new beginning for you.'];
cards[2] = ['02_High_Priestess',
'You have been in need of new experiences and may wander somewhere outside of your comfort zone. If you are lacking support in important areas of your life, you should consider the idea of investing your time in new people and new ideas. You are entering a time of renewal, but you may need the help of another.',
'The undiscovered or repressed creative abilities you have are demanding to be expressed. Finding a spiritual guide will help you realize the full potential of your psychic or artistic abilities. In order to get what you desire, you will need to overcome your fear of commitment.',
'You are on course to receive real rewards, but only if you continue your discipline and motivation. If you reject the attempts to dissuade you, your future is bright. Follow your intuition and you are headed towards the lasting contentment of success.'];
cards[3] = ['03_Empress',
'The last opportunity you had is proving its influence now. Whether business, personal, or artistic, a new partnership will require your continued effort to succeed. Remember your most resourceful behaviors, but especially your discipline.',
'There may be a new beginning unfolding before you and you decided its quality. Be understanding and especially sensitive to the emotional aspects of life. A loved one will need a helping hand or light in the dark. The role is yours to fill, no matter your choice.',
'The future will bring healing and respite for your emotional and physical wounds. Spending time walking on new paths will be more beneficial than mending bridges. Your investments will pay off if you carefully tend them.'];
cards[4] = ['04_Emperor',
'Authority has played a great role in shaping your life. Your good position may be due to a government or a powerful person. The resolution of a recent conflict is approaching.',
'There may be a moment where someone in a position of authority offers to help you. In any form, the more experienced hand that has come to help you may be more capable than yours. Protecting your loved ones is important, but those in a leadership position must know how to compromise. Beware the overly-dependant.',
'Taking the initiative may lead you closer to your goal, but only if you can bear the responsibility of all your actions. You will be given the opportunity to lead in one of life\'s many roles. Remember those who follow behind you.'];
cards[5] = ['05_Hierophant',
'There is value in an ambition from your past. Look to a strength that you may have neglected.',
'The opportunity for work or study under a superior is approaching. If the others around you are capable of being wrong, so are you.',
'Look to the support of a solid organization or structured principles to achieve success. Your actions should be motivated beyond selfish reasons, or there will be little reward for them.'];
cards[6] = ['06_Lovers',
'By becoming more in tune with yourself, you will be more able to connect with others. The emotional burden of a recent conflict will soon be lifted and a successful resolution reached.',
'There is an approaching conflict that will test your values. In order to progress, you are going to have to make a decision between love and career. Neither will disappear forever, but the choice will shape your priorities.',
'It will benefit you to remember that opposites are two sides of the same coin; there is not one without the other. The right choice will be made only if you have accepted others and yourself.'];
cards[7] = ['07_Chariot',
'Your character has been tested by the tendency to protect your own interests and ego. The struggle has strengthened you and recent events have given you a chance to accomplish your victory.',
'Good news is coming and you will better the opposition in a decisive victory.',
'Continue your struggle and the end you seek will be achieved. Honor, acclaim, and recognition are all possible outcomes for you if you do not quit.'];
cards[8] = ['08_Strength',
'Your strength is balanced and you have both physical endurance and mental strength. This inner strength may lead you to explore the other potentials for your abilities.',
'Do not turn down any offers that will change your future. Have faith in your own convictions, and be strong enough to trust where you will land.',
'There is a strong, energetic release in your future which will lead you into major life changes. By understanding your true value, you will make the most of a wonderful chance to improve your life.'];
cards[9] = ['09_Hermit',
'The pace of your past has slowed, and it is time to accept this. Continue looking for your finals goals and consider the insight you have recently gained.',
'There is someone who can help you through all your problems, and their insight may surprise you. This person is yourself. By understanding yourself, you can better understand others.',
'When you become aware of your true road, there will be nothing to stand in your way. Life has challenged you, but you are prepared to make the best of the future.'];
cards[10] = ['10_Wheel_of_Fortune',
'The actions of your past are the seeds of your future success. To make progress, you must accept the changes coming.',
'There is a beneficial change approaching, but keep in mind that luck is out of your control.',
'The future will yield an opportunity to change paths towards personal growth and happiness. You must be ready to change your ways of thinking, because whether or not your actions bring success, they represent beneficial change.'];
cards[11] = ['11_Justice',
'Balancing your emotions will pay off and bring you harmony in relationships. The confusion of your life can be overcome if you find inner balance.',
'You wil receive some gift of advice or have a debt repaid to you.',
'When all is said and done, you will receive the outcome that you truly deserve. Your moral character will be justified, so maintain integrety and strive to balance yourself.'];
cards[12] = ['12_Hanged_Man',
'Letting go of some things from your past has brought new value to your spiritual life. That which you sacrificed must be seen in a new way.',
'If there is something being rushed, this may suggest that it is going to pause. Keep in mind that the act of giving help is not more important than the person being helped.',
'Many things are unknown to you now, so you must make new goals and plan carefully. Acting at the right moment will get you ahead.'];
cards[13] = ['13_Death',
'You have moved into a new phase of life. All things change with time, and your path through this world is no different.',
'A major event is approaching and will arrive suddenly. You will lose something valuable.',
'To move forward, develop a new perspective on the world. The past is behind you and the rest of your life is still ahead of you, so continue the journey with all your heart.'];
cards[14] = ['14_Temperance',
'The experiences you\'ve had learning to work in harmony with others will be an ongoing trend. Balancing the material and psychic elements in your life has deeply influenced you.',
'Something you have long desired will come to fruition. Expect a wealthy partnership or marriage to develop in your immediate social circle.',
'Take control of your life and practice moderation. By staying in balance, you will resolve any current conflicts and begin a new chapter in your life.'];
cards[15] = ['15_Devil',
'One of the choices you\'ve made was wrong for you. Negative forces are slowing your development.',
'There is an event beyond your influence that will change your life. It is uncertain whether it is good or bad, but avoid extravagant behavior and be true to yourself.',
'The time is coming that you will have to find beauty within yourself and stop the projections you are casting on the world. Find the courage to change your life. The course of your life is beyond your knowing, but this awareness will defeat your self-delusions.'];
cards[16] = ['16_Tower',
'To make room for the new, the old must be destroyed. The ambitions that you have been following are built on weak foundations and offer false rewards.',
'A conflict is coming to a head in your life. Relationships will need to be reevaluated and restructured in order to maintain.',
'By withstanding the coming challenges, your future will be bright. Seein things as you want them to be in order to make them become that way. Knowing the worst is behind you can give strength.'];
cards[17] = ['17_Star',
'Move on from the hardships of the past and begin your renewal. At the end of all struggles will be peace; rely on your inner strength and external support systems.',
'Consider balance and restraint when finding solutions to your current problems. The right amount of help and encouragement will bring harmony and happiness to your circles.',
'The time of your renewal is approaching. You have chosen the right path to restore your mental and physical health. By being brave enough to choose the riskier roads, you will inspire those around you.'];
cards[18] = ['18_Moon',
'Your understanding of a past event may be distorted by your current perceptions. Reflect on your history and make sure the pieces fit together. By eliminating uncertainty, you will find more peace.',
'There is a challenge approaching, taking the form of either a new creative project or a conflict in a relationship. Your history will reveal the best course of action.',
'Your imagination will bring you success if your thoughts are coupled with practical action. The struggle to reach your potential may bring about many conflicts in your life, but the results will be beautiful.'];
cards[19] = ['19_Sun',
'The successes you have achieved in the past will set the stage for future joys. Continue developing your line of work or field of study and the rewards will come.',
'There is an opportunity for new friendship or a relationship that will lead to happiness and contentment. Do not give up and you will be led to success.',
'ou are approaching a moment that has the potential to change your life. Take full advantage of this time and you will achieve a future of endless possibility.'];
cards[20] = ['20_Judgement',
'Your past is full of good work, but the process of your liberation from those experiences is ongoing. You are beginning a new chapter in your life.',
'The present has arrived and the past is relinquishing its hold on your fate. This is the best time to change an element of your lifestyle.',
'The fruits of your decisions are coming and you will receive that which you deserve. The path at your feet and the direction it is leading you are clear. You will see your ultimate desire through to the end.'];
cards[21] = ['21_World',
'The path you are on will eventually bring you full circle. It may take a while to realize this, but the journey will allow you to accept new responsibilities and points of view.',
'The present moment will bring you the fulfillment of a wish or a long desired change in scenery. To find satisfaction, you must accept the ideas of others to be equally valid as your own.',
'You must find your purpose to accomplish it. The same with dreams; you must first be aware of it to make it exist. There is no guarantee for success but the experience you gain will have the potential to fulfill your desires.'];
cards[22] = ['22_Ace_of_Wands',
'Reexamine your past goals, as you are perhaps limiting yourself. There is inspiration building inside of you that will vent its energy destructively if you do not use it creatively.',
'There is a new beginning at hand. It may take the form of a new phase of life, a new enterprise, a new project, or a new source of inspiration.',
'To succeed, you must think clearly and plan ahead. There is a void in your life waiting to be filled, and it is your duty to fill it. Prepare for a transformative experience by filling this void with something to positively influence your new beginning.'];
cards[23] = ['23_Two_of_Wands',
'The research, development, and constant application of your skills has led you to progress in life. If you intend to arrive at your intended destination, continue to look ahead and plan.',
'A generous offer for help is coming. With analysis and development of your ambitions, this influence will help you attain fulfillment.',
'Reflection and self-awareness will lead you to success. Trust your intuition, but also be open to help from others.'];
cards[24] = ['24_Three_of_Wands',
'Your efforts have established a foundation for your success. Maintain your resourcefulness and keep efficiency at the heart of your drive forward.',
'An offer for help may bring about a new project or idea, so do not delay in accepting it. The opportunity to interact with someone with greater resources than you will lead to long-term success.',
'The work ahead of you will pose an intellectual or mental challenge. In order to succeed, you must be able to think creatively or invent a path forward.'];
cards[25] = ['25_Four_of_Wands',
'Your consistent efforts have resulted in reward and satisfaction. The drive to create or build something has been developing in your subconscious.',
'Accept the support of friends and loved ones, as you cannot be strong all the time. You are on track to completing something meaningful, so do not forget that you are not alone.',
'By believing in yourself and applying positive energy to your decisions, you will achieve prosperity. The foundation of your future will be laid on the good deeds of your present.'];
cards[26] = ['26_Five_of_Wands',
'The battles you have faced has led you to boldness of character. This is a valuable trait, but only in moderation. Facing adversity requires tact, and it may feel as though your progress is too far delayed by the obstacles in your path.',
'A miscommunication or misunderstanding will pose obstacles to your progress.',
'There will be an opportunity in the future that requires you to tame your boldness in order to succeed. No one can decide your actions but you, so rely on your strength of will to achieve balanced progress.'];
cards[27] = ['27_Six_of_Wands',
'The effort and inspirations of your past have brought you to where you stand now. Continue on your path and you will find rewards.',
'There is good news coming. Though it may be conditional, this change will greatly aid your pursuit of fulfillment.',
'There is good news coming. Though it may be conditional, this change will greatly aid your pursuit of fulfillment.'];
cards[28] = ['28_Seven_of_Wands',
'Despite slow progress, your determination and sustained efforts will lead you steadily forward. Do not give up.',
'There is a great conflict approaching, but do not fear. Through courage, you will overcome this hurdle and experience a major change in your life as a result.',
'Continue to believe in yourself. The odds may be against you but you have the power to beat them. The courage to fight on and accept challenges will lead you to a bright future.'];
cards[29] = ['29_Eight_of_Wands',
'There are past goals that will not be able to move your forward. Think of a change that will bring you the most happiness. The struggle which has been occupying you will pass and a brief peace will follow.',
'Exciting news will arrive to break the calmness of your present. The discomfort is necessary to remove you from your motionless present.',
'A new venture will bring you future success, but you must be ready to make the right choice in a sudden decision.'];
cards[30] = ['30_Nine_of_Wands',
'The struggles you have already experienced have granted you some stability in the present. By evaluating the reactions of others, your progress has been made smoother but this tactic will not lead to sustainable ease.',
'Some encouragement from a friend or loved one will help you overcome the challenge you face.',
'There are inevitable conflicts approaching in the future, but you can overcome them. In order to succeed, rely on your inner strength and do not sacrifice your values for the sake of short term gains.'];
cards[31] = ['31_Ten_of_Wands',
'The strength that you\'ve developed over years of struggle will lead you to the solution of your current problem. The negativity you have recently let go of will allow you to form a new philosophy.',
'Bear down and see the challenge through to the end. If you have been disconnected from someone close to you, expect an opportunity to reconnect.',
'By focusing your energy in one direction and consolidating your efforts, success will be easier to achieve. You will have the chance to achieve your desires, but you must first reach your lofty goals.'];
cards[32] = ['32_Page_of_Wands',
'The prospects of recent work has energized you to seek financial gains or to begin new creative projects.',
'Good news is coming. It will infuse joy into your life.',
'A new phase of your life will begin after you receive an intense flash of inspiration. This inspiration will be brought about by good news, progress in your field, or career advancement.'];
cards[33] = ['33_Knight_of_Wands',
'The root of your recent desires for change is your curiousity and intuition. The conflicts you have faced at work have influenced the outcome of events around you.',
'A spontaneous decision will lead you to make a long journey or a permanent relocation. Your desire will be achieved in an unexpected way.',
'There are new challenges approaching, based on a hasty decision. It may or may not have been your choice, but if overcome, the challenges will lead you to happiness and a fulfilling life.'];
cards[34] = ['34_Queen_of_Wands',
'Patience is one of your virtues and it has helped you create comfortable living situations with those around you. You have made wise decisions and this ability to think soundly will help you in the future.',
'A loving friend will give you helpful advice. This ally may be a woman, but no matter their identity, show gratitude and return the favor.',
'By following the advice of a close female influence, you will achieve success. Your homelife will be fulfilling and without intense conflicts. You and your loved ones will be content with your environment.'];
cards[35] = ['35_King_of_Wands',
'The new ideas that you incorporated in the past are going to open up opportunities in the present. The ideas have given you momentum that inspires and encourages others.',
'You will succeed if you gain help promoting your ideas. There will be increasing inspiration to help others around you.',
'The future will bring you success in your professional life. Good investments and prudent spending will outweigh the risks you take and the strong conviction you have shown will grant many opportunities.'];
cards[36] = ['36_Ace_of_Pentacles',
'Your time has been well spent and you will eventually achieve the success you desire. The projects you have begun will pay off.',
'Reassuring news will come to you. It may help you realize that you are on the appropriate path to receive the recognition and material rewards you deserve.',
'You are destined for a major gain. Whether this be financial, emotional, or personal, there are spiritual blessings waiting for you.'];
cards[37] = ['37_Two_of_Pentacles',
'You have been confronted by the difficulty of beginning something new. In order to succeed, you must learn to balance your old practices with your new.',
'A change for the better will arrive via communicated information. You will receive some prudent counsel on the best course through your fluctuating states.',
'Determining your most valuable strengths can help you create opportunities for yourself. There is a road out of your ambivalence if you think to find it.'];
cards[38] = ['38_Three_of_Pentacles',
'The time you have spent mastering your abilities has been a smart investment. Your confidence has grown and if you continue to nurture this self-assurance, you will succeed.',
'The object of your present focus is due for expansion and elaboration. Your peers may be a useful tool to help you complete your goals.',
'Your inner satisfaction demands a pursuit of excellence and a mastery of your craft.'];
cards[39] = ['39_Four_of_Pentacles',
'Your ability for hard work and your dedication will bring you material success. A recent trade, proposition, or commercial venture is adding a deeper significance to your life.',
'You will receive financial rewards for the effort you have shown. You will triumph, but this victory will be hollow if seen only as monetary gain.',
'To maintain your financial security, avoid excess and stick to your strengths of reliability and resourcefulness. You can achieve leadership, power, and wealth, but only through great effort and sacrifice.'];
cards[40] = ['40_Five_of_Pentacles',
'A recent emotional or financial loss is weighing heavily upon you. Do not let your pride lead you away from the assistance of others.',
'The hardship you face will be overcome, so do not give in to the feelings of inadequacy or insecurity that it has cause you.',
'Your future holds a necessary change for you in order to find happiness and security. This change may be in direction or motivation, but it will show you that all struggles can be overcome.'];
cards[41] = ['41_Six_of_Pentacles',
'Your fair consideration of others in the past will lead you to success in the present.',
'Your fervour for life and faith in your own talents will be renewed. The joy of being able to help someone in need will illuminate the bigger picture.',
'Keep in mind that the kindness of others is out of your control, but you are totally capable of bestowing favours on others. If you seek a favour, it may do well to give freely to others.'];
cards[42] = ['42_Seven_of_Pentacles',
'The delays in your projects have been affecting you, but do not lose hope. Your perseverance will lead you to success.',
'The long period of hard work you are currently in will bring you much personal growth and achievement.',
'Your path will be long, but the rewards will be great if you can continue without losing determination or vigour.'];
cards[43] = ['43_Eight_of_Pentacles',
'The skills you are mastering will lead you to success down the road. Continue developing and you will reach a moment of epiphany.',
'By developing your talents, you will find success in your efforts. Investing in yourself now will lead to greater rewards later.',
'The future holds a successful career or spiritual endeavour for you. The amount of acclaim you receive will depend on the amount of time you have spent determining and mastering your skills.'];
cards[44] = ['44_Nine_of_Pentacles',
'The pleasure you have experienced was earned by your achievements. Though the rewards of a recent project are not yet obvious, you will receive abundantly for your work.',
'The solution you have been seeking will arrive and relieve you of the stress associated with your problem.',
'There are new challenges waiting for you to dispel your feelings of dissatisfaction. The void you are experiencing will not be remedied by the challenges, but the rewards will help you be content.'];
cards[45] = ['45_Ten_of_Pentacles',
'You have been prosperous and established a secure base by your ability to spend money wisely.',
'You will receive a reward that is partially due to your efforts but also due to your position within your family. Carefully evaluate your own merits accordingly.',
'An unexpected solution to a difficult financial problem will appear. The projects and ideas you are currently working on will be of benefit to future generations.'];
cards[46] = ['46_Page_of_Pentacles',
'The ambitions and idealism of your past will bring success from your newest ideas. You are in the process of developing a new hobby or occupation.',
'There is news coming that portends the arrival of change. Although not immediate, prepare to evaluate the risks and rewards of new ventures.',
'You will gain insight into your future if you remain attentive and studious of the signs around you. Everything you need to know is available now if you take the time to understand it for later.'];
cards[47] = ['47_Knight_of_Pentacles',
'The challenges of your past have set the stage for a promising future. Your dependability and responsible attitude make it a priority for you to do your work to the best of your ability.',
'You will receive encouragement from a young person. The security you need to pursue your ambitions will arrive.',
'Follow your routines to produce the best possible results. Through patience and sustained concentration, you can achieve the heights of your loftiest ambitions.'];
cards[48] = ['48_Queen_of_Pentacles',
'You will be granted the opportunity to create a secure environment by the talents you have been developing. The help you give and continue to give to those in need will be a significant source of fulfillment.',
'A feminine influence in your life will give you some practical advice. This advice will help you create abundant prosperity.',
'Effectively utilizing your talents will lead you to financial success. Keep in mind your more practical behaviours and prosperity will find you.'];
cards[49] = ['49_King_of_Pentacles',
'The cautious progress you have been making is leading you towards success. The advice you recently received will be helpful in achieving your goals.',
'The idealism you have shown has made you confident and reliable, but it may do better to begin focusing on your financial security for a period. Consulting a professional or elder will help protect your efforts.',
'You have intrinsic abilities in the fields of financial profit and material gain, even if you are not aware of them. The money you earn through your own efforts will bring rewards beyond material gain.'];
cards[50] = ['50_Ace_of_Cups',
'There have been numerous occasions that prove your creative talent and ability to succeed in your efforts. By being passionate and intensely focused, you have allowed for greater productivity.',
'Good news is going to bring joy and extreme satisfaction to your life.',
'The difficulties you face in the future will take a toll on your emotions, but in the end, will bring about abundant joy. Remembering this natural balance will bring you great rewards.'];
cards[51] = ['51_Two_of_Cups',
'You have recently made a friendship or partnership that will bring you great rewards in the future. This connection will be meaningful for years to come.',
'A loving union or close partnership will begin soon. Through commitment and dedication, this relationship will bring you great rewards, even if they are distant.',
'Be on the lookout for a partner that will facilitate the achievement of your goals. It should be someone like you who can understand your ambitions and priorities.'];
cards[52] = ['52_Three_of_Cups',
'Long dormant talents are beginning to influence your life and the work you have done is beginning to influence your future. You may find richer rewards by investigating more experiences than you have previously.',
'There is abundant energy gathering around this moment that signifies you are approaching a new phase of life.',
'The desire to help other people will factor greatly into your considerations and you will take a greater joy in a significant role among your community. A full life lies ahead of you, to be celebrated by the ones who love you.'];
cards[53] = ['53_Four_of_Cups',
'You are discontent and nothing is changing to influence this. Your desire for change will be the most powerful impetus for the world around you to change. Take a new approach in order to transform your circumstances.',
'Do not be afraid to move forward. Instead, fear becoming overly content. Seek new paths in order to progress on new levels.',
'There will be long delays before you achieve your goals. Do not lose faith and keep your eyes facing forward. Make your plans and do not lose sight of the exciting rewards you desire.'];
cards[54] = ['54_Five_of_Cups',
'The urge to try something new is a result of a disappointment or dissatisfaction you have experienced. Your current sadness is an expression of these failed expectations.',
'Explore any alternatives paths that you discover. But if you avoiding the truth, it will be difficult to create any sustainable satisfaction.',
'An error on your part will lead you to a regretful situation. Be ready to repair the damage you have caused and more importantly, to forgive yourself.'];
cards[55] = ['55_Six_of_Cups',
'The past has brought you many rewarding experiences of love and success. Do not linger too long on what is past, and move forward with your achievements.',
'A reward that is the result of your past actions will come to you presently. By making a new friend or strengthening a relationship, you will find a great amount of commonalities.',
'To enhance your future, you must build upon the virtues of your past. It is not enough to have succeeded before, you must improve upon your capabilities. A deeply rooted desire will require some evolution to achieve.'];
cards[56] = ['56_Seven_of_Cups',
'You have lost a lot of time chasing the many conflicting interests in your life. Do not be misled by daydreams and fantasies; pick a practical goal and start working.',
'You will receive a surprising reward for your usual mental and creative activities.',
'The inability to decide will slow your progress. Being open to change will help, but also a constant effort to determine what is true will keep you moving forward. Be honest with yourself.'];
cards[57] = ['57_Eight_of_Cups',
'Your ability to earn money through determination and hard work will be necessary in the future. Your direction has been uncertain, but your heart tells you to keep seeking. The change you seek can take any form.',
'You are going to experience something completely new, travelling great distances either in thought or location. There are big changes coming.',
'Maintain an open mind and every journey that you take will yield life changing results. Personal success and accomplishing your goals will lead you to your greatest joy.'];
cards[58] = ['58_Nine_of_Cups',
'The source of true happiness is your soul attaining peaceful balance. The efforts you have spent will bring your reward. Stay strong and keep working.',
'Your emotional and material well-being are at hand. Look to your friends for advice and support, but recognize that you will find fulfillment.',
'The goal you have set for yourself is down the road a ways. Stay true to your desires and you will reach the destination you seek. Balance your heart and mind to find a true calling.'];
cards[59] = ['59_Ten_of_Cups',
'By taking confidence in your direction and following your deepest convictions, you have been propelled forward. This commitment and your comfort with authority have allowed room for recognition and success to manifest in your life.',
'A new undertaking is about to begin for you. This task, event, or journey will bring about the beginning of a long lasting friendship. Do not miss this opportunity.',
'The potential for financial success may present itself through some aspect of property ownership. Either find domestic happiness or gain prestige in public work. Despite the difficulty, balancing both at once is possible.'];
cards[60] = ['60_Page_of_Cups',
'There is an idea you have already had that can be developed further for greater results. Your awareness of the obstacles before you will lead you to an understanding of the best ways around them.',
'Good news will reach you and remind you of the importance of a fresh outlook on life. See the humour in life and remember the healing power of laughter.',
'Be prepared for an upcoming opportunity. It will pass you by too easily if you are not ready to seize it for yourself. The emotional struggles you pass through will teach you how to love more deeply and intimately.'];
cards[61] = ['61_Knight_of_Cups',
'Your strengths have been your intellectual capacity and self-determined will power. Being caught slightly off-guard by the new directions and ideas of others is natural to your unique perspective.',
'An important offer or invitation will arrive suddenly and unexpectedly.',
'Staying focused and following your most passionate beliefs will lead to progress towards your goals. You will find peace in deep, meaningful connections with others.'];
cards[62] = ['62_Queen_of_Cups',
'You have achieved self-awareness by balancing all aspects of your personality. The success you desire is not here yet, but will arrive if you continue to deepen your inner knowledge.',
'Possibilities to your life will be revealed by the influence of a powerful woman. She may challenge or inspire you, but whatever she does will lead you to valuable insight.',
'Seek assistance or advice from your loved ones, looking especially to the feminine wisdom around you. Your journey will be determined by your emotional considerations, regardless of your professional success.'];
cards[63] = ['63_King_of_Cups',
'A concern from your past will revisit you. If you have been in need of help, it may be a good idea to seek professional guidance.',
'Someone who is greatly capable of aiding you will appear in your life. Take their advice and do not hesitate to seek support.',
'In order to bring about a state of peacefulness, seek advice. You will not find balance on your own, so seek out a powerful ally to guide you.'];
cards[64] = ['64_Ace_of_Swords',
'You have fought in the name of good, adding your intense energy to an idealistic cause. The events of the recent past have set unchangeable events in motion.',
'You are entering a new phase of your life and everything is going to change. The causes and results of the change are not certain, but this period will reveal many things to you.',
'Putting your creative thought in to action may require some courage, but you will be able to overcome the longest odds if you desire.'];
cards[65] = ['65_Two_of_Swords',
'Being honest about your past will help you to make a difficult choice. The conflict that you have been experiencing will be resolved by a new approach.',
'There is a conflict that will lock up your energies in the effort to resolve it. By overcoming indecision, you will take deliberate action to decide the resolution.',
'The difficult situations that lay ahead of you must be overcome immediately, so do not delay or hesitate. Bring about the best possible ending by acting honestly and with honourable intentions.'];
cards[66] = ['66_Three_of_Swords',
'There is a great emotional or physical pain that you are still nursing. Letting go of accountability may allow you to embrace the opportunity to create something new provided by the recent destruction of something you loved.',
'You will soon experience an intense emotional upheaval. This period of suffering will lead you to a better future.',
'The path ahead of you is being cleared to make room for something new. It is your decision how to make use of the opportunities in store.'];
cards[67] = ['67_Four_of_Swords',
'The plans you have already made may not properly guide you through the changes coming. The shadow you have felt hanging over you will soon pass, and the warmth of your life will return.',
'Organize and examine your thoughts in solitude. Your dormant qualities of inner strength and self respect will guide you.',
'Take the generous time you have to plan the course of your future. There is no rush to decide what is best for you and the people you care about.'];
cards[68] = ['68_Five_of_Swords',
'The failures you have experienced are the result of your overestimations and inabilities. In order to succeed, you must be honest with yourself.',
'An unrealistic attitude may cause you to experience defeat. Your mistake will cause pain. Be realistic in your expectations in order to assess and move past the conflict.',
'Take your losses with grace and do not give in to despair; you can create victory from the results of any defeat.'];
cards[69] = ['69_Six_of_Swords',
'You have overcome a major hurdle while also staying true to yourself. The understanding and objectivity you have developed will lead you to a better future.',
'There will be a change in your life for the better. A burden or challenge you will face may yield a new path.',
'The challenges you face will eventually be overcome. The struggles are necessary to provide you with the growth you need to find your way to a better future.'];
cards[70] = ['70_Seven_of_Swords',
'It may be time to put some of your projects on the back burner in order to give more attention to more pressing issues. The plans you have made are not coming together as nicely as you hoped.',
'The best way through a recent conflict will be through diplomacy and cleverness. Avoid overt confrontations.',
'Your success in the future depends on your ability to overcome opposition. The strategy you choose will determine whether you suffer losses or come out ahead. Assessing the opposition will make your actions better informed.'];
cards[71] = ['71_Eight_of_Swords',
'The desire to avoid confrontation stems from your aversion to causing others pain. This is an admirable trait, but may prevent you from acting on your best interests.',
'The obstacles before you will only be overcome by your courage and patience. The demands of others are locking you up and restricting you from growing.',
'Do not fear using your own judgment to determine the path for yourself. If you ignore your feelings and believe others over yourself, you will miss the importance chances to change your life.'];
cards[72] = ['72_Nine_of_Swords',
'You may be feeling unfulfilled and suffer from feelings of repression and stifled creative energy. Do not miss out on the present moment because of your stubborn disapproval of the past.',
'The difficulty you have shouldered will soon be lifted from you. Your feelings of depression and mental distress must be dealt with.',
'The standards you have set for yourself may be unreasonable and steer you towards self-loathing and disappointment. You must be able to forgive yourself and others in order to move past your negative feelings.'];
cards[73] = ['73_Ten_of_Swords',
'By coming to terms with a sometimes bitter reality, you are learning that moving forward is the most important aspect of healing.',
'The end of something important is about to occur, so be prepared to deal with the consequences. Nothing in life is permanent.',
'Assess the direction you are headed. Beware following the opinions of other\'s, as this may lead you aware from your own truth. Seeing the world through pragmatic eyes will balance your optimism.'];
cards[74] = ['74_Page_of_Swords',
'The abilities that lay dormant within you are being brought to the surface. The events of your past are leading you to activity, and the time to carve out your own path is at hand.',
'There is unexpected news on its way. In order to benefit from the changes coming, you must rely on your intelligence and ability to adapt.',
'There is a deep desire for change that is making you irritable and agitated. Seeking true independence of mind will lead you to a clearer perception of your motivation and others.'];
cards[75] = ['75_Knight_of_Swords',
'The desire for change has been strengthening inside of you. Plan your future objectives but keep them to yourself.',
'You gain the attention of a young upstart. A problem will be solved through the help you receive, but be prepared to deal with a new one.',
'Your life\'s compass may be suddenly realigned by a drastic change in perspective. Look to your friends and loved ones for encouragement.'];
cards[76] = ['76_Queen_of_Swords',
'Expect counsel from a sharp witted elder who may be a woman. It is possible to maintain your independence while accepting help from friends.',
'Do not focus so intensely on your goals, as this may be constricting your ability to achieve them. Rely on your strong spirit to illuminate the bigger picture to you.',
'The Queen of Swords is an analytical, independent problem-solver. She brings with her mental clarity or an end to something troubling in your life but not without a painful loss or separation. She is stoic and astute but gives nothing away as a positive or negative outcome. Maybe is the only answer.'];
cards[77] = ['77_King_of_Swords',
'Your strength lies in your intellect. Looking ahead and taking authority into account will lead you to turn your collection of good ideas into reality.',
'A figure of authority may help you set your plans in motion.',
'There is opposition to your ultimate goals. Guile and your superior intellect will lead you past this destructive barrier. You will find fulfillment in organizing those around you as a leader.'];



/*generate random number from 0-77 */
function getRandom(num){
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}



/* generate the new card with its text*/
function showNewCard(id){
   previousCard = document.getElementById(id).src;

   if(previousCard.includes("deckback2.jpg")){
	   var index = getRandom(36);
	   var rotateIndex = getRandom(2);
	   var currentCard = cards[index];
	   var cardResult = "images/deck/" + currentCard[0] + ".jpg";
	   document.getElementById(id).src = cardResult;
	  var newimg = document.getElementById(id);
	 
       document.getElementById(id).style = 'transform: rotate(' + rotateIndex*180 + 'deg)';
	   if(id == 'past'){
	      document.getElementById("p1").innerHTML = currentCard[1] ;
	    }
	   else if(id == 'present'){
	     document.getElementById("p2").innerHTML =  currentCard[2] ;
	    }
	   else if(id == 'future'){
	     document.getElementById("p3").innerHTML =  currentCard[3] ;
	    }
   
}

}