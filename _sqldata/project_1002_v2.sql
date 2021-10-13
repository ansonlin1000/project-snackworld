-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 02, 2021 at 03:51 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminaccount`
--

CREATE TABLE `adminaccount` (
  `adminId` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `adminaccount`
--

INSERT INTO `adminaccount` (`adminId`, `password`) VALUES
('admin', 'adminpassword');

-- --------------------------------------------------------

--
-- Table structure for table `collectedprod`
--

CREATE TABLE `collectedprod` (
  `collectNo` int(11) NOT NULL,
  `prodId` int(255) NOT NULL,
  `isCollect` char(1) COLLATE utf8mb4_bin NOT NULL,
  `memberId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `collectedprod`
--

INSERT INTO `collectedprod` (`collectNo`, `prodId`, `isCollect`, `memberId`) VALUES
(1, 24, 'T', 100938467),
(2, 16, 'T', 100938467),
(3, 37, 'T', 100938467);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `memberId` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `memberName` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `memberBirthday` date NOT NULL,
  `memberGender` char(1) COLLATE utf8mb4_bin NOT NULL,
  `memberTel` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `memberPhone` char(10) COLLATE utf8mb4_bin NOT NULL,
  `memberAddress` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `memberEmail` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `memberSnackTestResult` int(1) NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`memberId`, `memberName`, `memberBirthday`, `memberGender`, `memberTel`, `memberPhone`, `memberAddress`, `memberEmail`, `memberSnackTestResult`, `password`) VALUES
('100929490', '杜柔珊', '1993-07-25', 'F', '03763723', '0953797894', '苗栗縣頭份市中正二路104號', 'xozubami55235@gmail.com', 4, 'test123'),
('100933628', '王宥平', '1998-12-18', 'M', '042536515', '0970123233', '台中市北區北平路二段208號', 'john11nnn887@gmail.com', 2, 'test123'),
('100938467', '趙世昌', '1983-01-30', 'M', '025468650', '0912076954', '台北市士林區福華路17巷1號', '4changzhao@gmail.com', 4, 'test123'),
('100982031', '謝羿卉', '1987-12-05', 'F', '043979015', '0934169127', '台中市豐原區社興五街5巷20號', 'nami1205@hotmail.com', 3, 'test123');

-- --------------------------------------------------------

--
-- Table structure for table `memberaccount`
--

CREATE TABLE `memberaccount` (
  `memberId` varchar(50) NOT NULL,
  `memberPhone` char(10) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `memberaccount`
--

INSERT INTO `memberaccount` (`memberId`, `memberPhone`, `password`) VALUES
('100938467', '0912076954', 'test123');

-- --------------------------------------------------------

--
-- Table structure for table `normalorder`
--

CREATE TABLE `normalorder` (
  `orderNo` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `orderDate` date NOT NULL,
  `orderName` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `orderPhone` char(10) COLLATE utf8mb4_bin NOT NULL,
  `orderPrice` int(11) NOT NULL,
  `orderPayment` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `orderDeli` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `orderState` varchar(5) COLLATE utf8mb4_bin NOT NULL,
  `orderSendState` varchar(5) COLLATE utf8mb4_bin NOT NULL,
  `orderMemo` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL,
  `memberId` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `orderType` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `orderPaymentNo` int(11) NOT NULL,
  `orderStateNo` int(11) NOT NULL,
  `orderSendStateNo` int(11) NOT NULL,
  `orderTypeNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `normalorder`
--

INSERT INTO `normalorder` (`orderNo`, `orderDate`, `orderName`, `orderPhone`, `orderPrice`, `orderPayment`, `orderDeli`, `orderState`, `orderSendState`, `orderMemo`, `memberId`, `orderType`, `orderPaymentNo`, `orderStateNo`, `orderSendStateNo`, `orderTypeNo`) VALUES
('210010001', '2021-08-10', '杜柔珊', '0953797894', 499, '信用卡', '宅配', '已取消', '無', NULL, '100929490', '超值箱', 1, 3, 3, 2),
('210030001', '2021-07-30', '趙世昌', '0912076954', 999, '信用卡', '全家取貨', '訂閱中', '已送達', NULL, '100938467', '派對箱', 1, 4, 1, 4),
('210709001', '2021-07-09', '王宥平', '0970123233', 425, 'ATM付款', '711取貨', '已完成', '已送達', NULL, '100933628', '一般', 2, 1, 1, 1),
('210803001', '2021-08-03', '趙世昌', '0912076954', 1389, '信用卡', '宅配', '已取消', '已取消', NULL, '100938467', '一般', 1, 3, 1, 1),
('210811001', '2021-08-11', '趙世昌', '0912076954', 1535, '信用卡', '全家取貨', '已完成', '已送達', NULL, '100938467', '一般', 1, 1, 1, 1),
('210825001', '2021-08-25', '謝羿卉', '0934169127', 588, '信用卡', '宅配', '已完成', '已送達', NULL, '100982031', '一般', 1, 1, 1, 1),
('210830001', '2021-08-30', '趙世昌', '0912076954', 1280, '信用卡', '全家取貨', '已完成', '已送達', NULL, '100938467', '一般', 1, 1, 1, 1),
('210905001', '2021-09-05', '王宥平', '0970123233', 398, '信用卡', '711取貨', '已完成', '已送達', NULL, '100933628', '一般', 1, 1, 1, 1),
('210913001', '2021-09-13', '趙世昌', '0912076954', 1546, '信用卡', '宅配', '已出貨', '配送中', NULL, '100938467', '一般', 1, 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderlist`
--

CREATE TABLE `orderlist` (
  `orderListId` int(11) NOT NULL,
  `orderNo` int(11) NOT NULL,
  `orderQuantity` int(11) NOT NULL,
  `prodId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderlist`
--

INSERT INTO `orderlist` (`orderListId`, `orderNo`, `orderQuantity`, `prodId`) VALUES
(1, 210913001, 1, 21),
(2, 210913001, 1, 26),
(3, 210913001, 2, 7),
(4, 210913001, 2, 4),
(5, 210913001, 1, 5),
(6, 210030001, 1, 8),
(7, 210030001, 1, 25),
(8, 210030001, 1, 33),
(9, 210030001, 1, 40),
(10, 210030001, 1, 37),
(11, 210030001, 1, 27),
(12, 210030001, 1, 10),
(13, 210030001, 1, 19),
(14, 210030001, 1, 34),
(15, 210030001, 1, 6),
(16, 210030001, 1, 30),
(17, 210030001, 1, 23),
(18, 210030001, 1, 3),
(19, 210030001, 1, 14),
(20, 210030001, 1, 5),
(21, 210030001, 1, 31);

-- --------------------------------------------------------

--
-- Table structure for table `prodlist`
--

CREATE TABLE `prodlist` (
  `prodName` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prodPrice` int(11) NOT NULL,
  `prodCountry` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prodCountryNo` int(11) NOT NULL,
  `prodStock` int(11) NOT NULL,
  `prodId` int(11) NOT NULL,
  `prodTaste` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `prodTasteNo` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prodType` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `prodTypeNo` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prodInfo` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prodPhoto1` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `prodPhoto2` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `prodPhoto3` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `prodlist`
--

INSERT INTO `prodlist` (`prodName`, `prodPrice`, `prodCountry`, `prodCountryNo`, `prodStock`, `prodId`, `prodTaste`, `prodTasteNo`, `prodType`, `prodTypeNo`, `prodInfo`, `prodPhoto1`, `prodPhoto2`, `prodPhoto3`) VALUES
('Salysol罐頭軟糖60g', 59, '西班牙', 7, 100, 1, '甜', '1', '糖果', '3', '      Salysol已有40年的歷史，是西班牙專門製作零食的廠牌。而他們最具特色的就是封裝零食的迷你罐頭了! 使用真空無菌包裝的方式，輕巧特殊的罐頭造型十分吸睛，在西班牙已是家喻戶曉的品牌。綜合口味的軟糖柳橙、檸檬、草莓三種口味製成5款造型，其中還有超特別的顆粒軟糖，外形像迷你葡萄串，吃起來外脆內Q；草莓口味的軟糖由高品質的白砂糖製作，只有手心般的大小，非常好攜帶，無論是外出郊遊或是工作肚子餓，大人小孩都能一同享用！\"\r\n      ', '/images/product_img/prodImg_1_1.png', '/images/product_img/prodImg_1_2.jpg', NULL),
('金鴨鹹蛋黃波浪洋芋片125g', 199, '新加坡', 8, 100, 2, '鹹', '2', '洋芋片', '2', '新加坡鹹蛋黃的領導品牌金鴨睽違許久再度開發新商品！主廚團隊耗時六個月反覆測試能與鹹蛋黃滋味完美結合的洋芋片大小與厚度，最終開發出獨家波浪形薯片！\r\n上面配上經典的咖哩葉、辣椒、薑黃粉等，讓你每一口都是滿滿的鹹蛋黃風味，每一片薯片都能品嘗出濃郁的東南亞椰香味，重口味的你千萬不可錯過。', '/images/product_img/prodImg_2_1.jpeg', NULL, NULL),
('Tom’s GILIM杏仁果30g', 38, '韓國', 6, 100, 3, '鹹', '2', '堅果/果乾', '4', '韓國必買零食第一名！！！蜂蜜和奶油的完美結合，配上營養好吃的杏仁果，鹹鹹甜甜好滋味，讓人欲罷不能。\r\n蜂蜜奶油：最熱銷最經典口味，奶味十足又充滿蜂蜜香。\r\n芥末：溫和芥末味，不過於刺激卻又讓人上癮。\r\n草莓奶茶：香甜草莓奶茶味，彷彿在喝真正的奶茶。\r\n水蜜桃優格：酸甜優格搭配香甜水蜜桃，完美搭配讓你一吃就愛上。\r\n海苔：鹹鹹甜甜充滿海洋的滋味。\r\n乳酸：日韓最熱門乳酸口味，酸甜有味，搭配酥脆堅果，閒暇時來一包剛剛好。', '/images/product_img/prodImg_3_1.jpeg', NULL, NULL),
('Big foot薄荷玫瑰鹽檸檬糖15g', 19, '馬來西亞', 7, 100, 4, '酸', '3', '糖果', '3', '炙熱的夏天來一粒，就能感受檸檬香氣並帶一絲的清涼口感。當鹹、酸、甜三種口感一次品嚐，還能讓口氣保持清新，別看區區一款糖果，此款商品可是馬來西亞必買伴手禮與Ptt鄉民們的熱推品呢！', '/images/product_img/prodImg_4_1.jpeg', NULL, NULL),
('琣伯莉米蘭餅乾(巧克力)21g', 25, '美國', 4, 100, 5, '甜', '1', '餅乾', '1', '這款米蘭餅乾可是全美國最經典的夾心餅乾，更被譽為是美國最好吃的巧克力餅乾!\r\n精選原料以及高品質的濃醇巧克力製作而成，不添加任何人工調味料以及防腐劑。\r\n酥鬆香脆的餅乾充滿奶香，包夾著香濃的巧克力醬，讓你一入口就停不下來! 還沒吃過的人一定要買來試試看!', '/images/product_img/prodImg_5_1.jpeg', NULL, NULL),
('Oishi Prawn 蝦味仙60g', 17, '菲律賓', 8, 100, 6, '鹹', '2', '餅乾', '1', '吃膩了台灣的傳統蝦味先了嗎？試試看這款來自菲律賓大廠Oishi推出的蝦味餅乾棒吧！\r\n口感輕盈酥脆且蝦味濃郁，有原味和辣味兩種選擇，一定能滿足喜歡蝦子的你~', '/images/product_img/prodImg_6_1.png', NULL, NULL),
('金鴨鹹蛋黃炸魚皮125g', 199, '新加坡', 8, 100, 7, '鹹', '2', '餅乾', '1', '來自新加坡超人氣零食炸魚皮來囉~~香脆魚皮配上咖哩葉、辣椒、鹹蛋黃等多樣食材用長達三周的時間醃製而成，之後再進行長時間的烘烤。\r\n一打開包裝濃郁的咖哩香味撲鼻而來，放入口中便可品嘗出東南亞的獨特的椰香風味～\r\n濃郁的鹹蛋黃配上些許煙燻味的脆魚皮，微辣的滋味令人不禁一吃再吃，重口味的你千萬不可錯過。', '/images/product_img/prodImg_7_1.jpeg', NULL, NULL),
('Walkers 蘇格蘭皇家奶油餅乾28.4g', 39, '英國', 3, 100, 8, '甜', '1', '餅乾', '1', '來自蘇格蘭的Walkers皇家奶油餅乾，僅採用簡單的四種食材- 奶油、糖、鹽、小麥就製成傳統道地的英國零食。\r\n其中使用的優質奶油每片含量更是高達32%，讓你一入口就能體會奶香四溢的滋味!\r\n想要體驗皇室下午茶都吃些什麼嗎? 那一定得試試這款被英國皇室指定為御用的點心的奶油餅乾!', '/images/product_img/prodImg_8_1.jpeg', NULL, NULL),
('MASSARA餅乾100g', 99, '土耳其', 8, 100, 9, '甜', '1', '餅乾', '1', 'Massara以獨門食譜，講究的烘烤技術，致力於製作健康美味的土耳其糕點。除了有中東最經典的椰棗口味，和經典的蜂蜜芝麻口味外，開心果口味則加入有土耳其綠之稱的開心果。在土耳其處處都可以發掘開心果的蹤跡，不論在甜點亦或是鹹食中，是男女老少皆愛的國民食材。開心果本身富含纖 維、維 生 素、礦 物 質，搭配酥香口感、簡約質感包裝，是健康悠閒下午茶的明智選擇呢～', '/images/product_img/prodImg_9_1.jpeg', NULL, NULL),
('盧卡義式土司150g', 59, '義大利', 7, 100, 10, '甜', '1', '其他', '5', '創立於1987年以其麵包製品而聞名，致力於追求產品質量和安全，成分控管嚴實，採用著名油廠之特級初榨橄欖油。迷你造型、酥脆口感的義式吐司，成分簡單天然，散發迷迭香的特殊清香，展現義式香料的單純原味。可與濃湯、沙拉一同享用，或搭配乳酪、火腿片、魚子醬、水果，做為餐前小點，感受義大利的清新迷迭香氣息。', '/images/product_img/prodImg_10_1.jpeg', NULL, NULL),
('Crispico皮可-經典薄糖小糖餅40g', 69, '波蘭', 8, 100, 11, '甜', '1', '餅乾', '1', '40年波蘭家族品牌\r\n結合傳統製法與最新科技，特別選用波蘭傳統食譜搭配新鮮雞蛋，獨特口感帶有一股迷人的蛋香，讓 Crispico 皮可深受波蘭及許多國家喜愛。\r\n經典小糖餅 / 肉桂小糖餅：蓬鬆餅乾撒上小糖粒，創造出的多層次口感！\r\n迷你小泡芙：小巧球狀鹹泡芙，不沾手好入口，適合放入湯品或是沙拉，任何時刻解嘴饞！\r\n種子麵包棒：含有多項健康食材芝麻、茴香、亞麻子、葵花子等，搭配番茄醬更有一番風味。', '/images/product_img/prodImg_11_1.jpeg', NULL, NULL),
('Napoleon糖果-檸檬225g', 139, '荷蘭', 8, 100, 12, '酸', '3', '糖果', '3', '超過6分鐘以上美味悠長的糖果\r\n純天然香料與色素製成，不含人工添加物\r\n純素可食用、無麩質、清真認證\r\n1912年成立的Napoleon拿破崙糖果，生產目標是讓每個人每天都能享受美味的糖果，百年來堅持使用荷蘭的傳統糖果製法，將完美比例糖漿於大型銅鍋中慢火熬煮，並加入獨有秘方內餡，顆顆擁有驚艷的甜蜜滋味。更驚奇的是，拿破崙每顆糖都能在口中停留長達6分鐘，帶來滿滿的甜蜜滋味。每顆獨立包裝，不論是招待客人、工作累了或獨自放鬆的片刻，都適合來上一顆。', '/images/product_img/prodImg_12_1.jpeg', NULL, NULL),
('Love Farm愛農場口袋檸檬片30g', 49, '泰國', 2, 100, 13, '酸', '3', '其他', '5', '於知名航空飛機上熱銷、明星也愛的人氣零食，選用整顆檸檬切片搭配天然蔗糖製成，隨時補充維 生 素 Ｃ、膳 食 纖 維，酸甜不苦澀，可以直接享用，也可以泡水、泡茶一起飲用，讓飲品更有一番風味！', '/images/product_img/prodImg_13_1.jpeg', NULL, NULL),
('三菱咖姆咖姆嚼糖袋裝-梅子', 55, '日本', 1, 100, 14, '酸', '3', '糖果', '3', '可以咀嚼的糖果！雙層口感雙重享受。使用日本國產梅～', '/images/product_img/prodImg_14_1.jpeg', NULL, NULL),
('Moo Chews牛奶鈣片18g', 59, '紐西蘭', 8, 100, 15, '甜', '1', '其他', '5', '源自紐西蘭，從牛隻到生產，一條龍自家製作，品質嚴格把關\r\n真正水果調味，無添加人工色素\r\n口感香脆、不黏牙\r\n一包牛乳片(18g)即含一日鈣質所需的25%\r\n添加木醣醇，益於牙齒健康', '/images/product_img/prodImg_15_1.jpeg', '/images/product_img/prodImg_15_2.jpeg', '/images/product_img/prodImg_15_3.jpeg'),
('Vicenzi維西尼夾心酥餅125g', 80, '義大利', 7, 100, 16, '甜', '1', '餅乾', '1', '依循百年傳承食譜製造，堆疊出192層的酥皮，搭配滿滿的夾心內餡，經過秘製烘烤技術，讓千層酥在含有內餡時仍達到口感酥、鬆、脆，絕對是喜愛千層酥的你不容錯過的首選！', '/images/product_img/prodImg_16_1.jpeg', NULL, NULL),
('Gnaw松鼠啃無糖牛奶巧克力35g', 69, '英國', 3, 100, 17, '甜', '1', '糖果', '3', '不額外加糖！使用天然麥芽糖醇，一半熱量、一半甜，但一樣美味。英國品牌Gnaw是巧克力專家，擁有多達30種不同口味的產品，皆為高品質手工製作，無人工添加物。以穿戴各種服飾的可愛小松鼠為 Logo，吸睛可愛的包裝、優質創新的巧克力製品聞名於 24 個國家。', '/images/product_img/prodImg_17_1.jpeg', NULL, NULL),
('Frutabela 運動能量棒-藍莓優格44g', 69, '斯洛維尼亞', 8, 100, 18, '甜', '1', '其他', '5', 'Frutabela運動能量系列滿足不同族群的運動需求，同時享受營 養 棒的美味。\r\n優格纖果系列與斯洛維尼亞自行車協會共同研發。富 含 鎂、維 他 命B2、B3、B5⋯等人體所需維 他 命、礦 物 質，有助於減輕生理及心理的疲憊、維持正常能 量 代 謝 及 肌 肉 功 能。\r\n高蛋白系列32%高蛋白，較其他系列高出3倍的蛋白含量。相比市售 蛋白棒少29%熱量及30%糖分，另含膳 食 纖 維，適合運 動 健 身 增 肌、塑 身 減 脂 族群使用。', '/images/product_img/prodImg_18_1.jpeg', NULL, NULL),
('多倫斯Naturals天然洋芋片100g', 79, '德國', 5, 100, 19, '鹹', '2', '洋芋片', '2', '暢銷於多倫斯的Naturals天然洋芋片', '/images/product_img/prodImg_19_1.jpeg', NULL, NULL),
('琣伯莉維諾納杏桃餅乾191g', 139, '美國', 4, 100, 20, '甜', '1', '餅乾', '1', '「金魚餅乾」原廠琣伯莉歷久不衰熱銷產品之一，不含人工色素、人工香料及防腐劑，使用杏桃鮮果熬煮成的果醬內餡，填充在香脆的餅乾上，色澤紅艷誘人。一口咬下，果醬甜蜜的滋味首先挑起味蕾，接著是與香脆餅乾體的完美結合，色香味俱全!', '/images/product_img/prodImg_20_1.jpeg', NULL, NULL),
('Dan D Pak每日混合果乾堅果仁禮盒', 1050, '越南', 8, 100, 21, '甜', '1', '堅果/果乾', '4', '(1盒/1包25g)\r\nDan D Pak誕生於1989年加拿大美麗的西海岸，以其世界一流的腰果聞名。每日混合包由4種營養堅果和2種水果果乾組合，堅果的醇香搭配果乾的酸甜，為不論是疲憊或閒暇時刻的你帶來活力滿滿，健康美麗的每一天！', '/images/product_img/prodImg_21_1.jpeg', '/images/product_img/prodImg_21_2.jpeg', NULL),
('Asahi朝日一本滿足草莓代餐棒46g', 49, '日本', 1, 100, 22, '甜', '1', '其他', '5', '賞味期限：2021/11/30\r\nAsahi朝日一本滿足系列已經火紅一段時間了，在日本各大藥妝店都看得到他的蹤影，他最厲害的地方在於這樣小小一條代餐棒卻含有了等同於3/4顆萵苣的纖維！還含有5種維他命，吃起來像超罪惡零食，日本的上班族非常喜歡將它當作代餐食用，就算很忙也可以高效率的補充營養。', '/images/product_img/prodImg_22_1.jpeg', NULL, NULL),
('Garudafood爆漿雪茄巧克力捲心酥320g', 99, '印尼', 8, 100, 23, '甜', '1', '餅乾', '1', '規格：黑巧克力320g\r\n賞味期限：2022/01/09\r\n人氣超夯的印尼捲心酥來啦～來自印尼知名品牌的巧克力捲心酥!\r\n別看他小小一支喔裡面可是有著滿滿的內餡，酥脆的外皮配上香濃滑順的巧克力醬，吃起來會爆漿的口感讓人一口接一口停不下來～\r\n份量剛好，巧克力也不會過於甜膩，獨立包裝方便食用是下午茶的最佳選擇，身為巧克力控的你千萬不能錯過這幸福的滋味！', '/images/product_img/prodImg_23_1.jpeg', NULL, NULL),
('Frutabela 低卡堅果棒(花生優格)30g', 49, '斯洛維尼亞', 8, 100, 24, '甜', '1', '堅果/果乾', '4', '賞味期限：2021/12/27\r\nFrutabela這次新推出的榛果優格口味讓你同時享受到營養棒的美味又能輕盈無負擔。\r\n濃郁的榛果和花生風味搭上十分解膩的優格淋醬，兩者相輔相成融合出最美物同時又兼具健康的堅果優格營養棒。\r\n這款商品絕對能打破你對營養棒不像一般零食一樣可口的成見！', '/images/product_img/prodImg_24_1.jpeg', NULL, NULL),
('KITCO Kettle厚切洋芋片40g', 69, '阿拉伯聯合大公國', 8, 100, 25, '鹹', '2', '洋芋片', '2', '賞味期限：2022/01/02\r\n非基改食品、不含味精、人工色素及香料\r\nKitco起源於科威特，創立於1962年，可以說是阿拉伯地區最具代表性的洋芋片之一。此款有五種口味，高達十款選擇，全系列採用高品質馬鈴薯厚切製成，創造出酥脆的口感，搭配樸實卻不簡單的調味，清爽不油膩，令人不自覺一片接著一片好涮嘴！\r\n注意事項：此系列包裝容易因折痕而產生些許色差，純屬正常情形，請安心食用。', '/images/product_img/prodImg_25_1.jpeg', '/images/product_img/prodImg_25_2.jpeg', '/images/product_img/prodImg_25_3.jpeg'),
('北日本長條洋芋片45g', 35, '日本', 1, 100, 26, '鹹', '2', '洋芋片', '2', '賞味期限：2022/01/31\r\n一口系列一直是北日本的熱門商品，設計成一口大小的尺寸和小型的長條包裝，不只方便享用攜帶也便利。\r\n鹽味口感清爽不會過於油膩，海苔鹽味每一口都充滿著海苔的香氣，清湯口味帶有蔬菜和雞肉風味，吃起來濃郁清甜，餅乾酥脆輕盈的質地，讓人吃了就停不下來，絕對是上班族的必備零食！', '/images/product_img/prodImg_26_1.jpeg', NULL, NULL),
('Orion厚切洋芋片60g', 69, '韓國', 6, 100, 27, '鹹', '2', '洋芋片', '2', '這款Orion厚切洋芋片，採用整顆馬鈴薯厚切而成，連馬鈴薯皮都能看見。\r\n以低溫油炸的方式降低油膩感，加上簡簡單單的椒鹽調味，鹹香且扎實的口感，讓他在韓國推出之後成為了暢銷產品，是韓國本地人都推薦的產品。', '/images/product_img/prodImg_27_1.jpeg', NULL, NULL),
('SAVINI TARTUFI薩維尼頂級松露洋芋片100g', 199, '義大利', 7, 100, 28, '鹹', '2', '洋芋片', '2', '賞味期限：2021/11/24\r\n品牌起源可追朔至一百年前，當時身為農夫的創辦人平日興趣就是牽著的狗到野外尋找松露，後來因緣際會創辦此品牌。SAVINI TARTUFI秉持著尊重環境、依循傳統的原則研發各種松露相關產品，近年來為了配合市場趨勢和消費者喜好，研發出松露口味洋芋片。這款頂級松露洋芋片，是由SAVINI薩維尼家族親自深入山林，挑選最好的松露，製作成香氣與鹹味剛好的頂級松露洋芋片，食用前先搖勻，讓每片洋芋片都能沾到適量的松露鹽，便能帶出SAVINI TARTUFI最好的滋味。', '/images/product_img/prodImg_28_1.png', '/images/product_img/prodImg_28_2.jpeg', '/images/product_img/prodImg_28_3.jpeg'),
('Richly Brownie 布朗尼脆片餅乾20g', 25, '泰國', 2, 100, 29, '甜', '1', '餅乾', '1', '2018霸佔泰國網路零食排行榜的布朗尼脆片餅乾來了！\r\n泰國當地超夯零食、IG爆紅！\r\n這款巧克力布朗尼脆片是由做布朗尼蛋糕起家的Richly Brownie出產，保留布朗尼的風味卻擁有酥脆口感，雙重濃郁的巧克力滋味~\r\n放到冰箱冰過再吃，風味更上一層樓！還可以撒在冰淇淋上吃唷~\r\n收錄在2018年9月零食箱《Snacklips波波黛莉編輯嚴選》中', '/images/product_img/prodImg_29_1.jpeg', NULL, NULL),
('Maitri小鯊魚鹹餅乾25g', 25, '泰國', 2, 100, 30, '鹹', '2', '餅乾', '1', '可愛又小巧的鯊魚造型餅乾，烘烤而成的金黃外表與酥脆的口感，再加上可愛的造型，絕對能讓小朋友們愛不釋手！此外，沒有過多添加物，只用鹽調味、成分單純的特性，保證讓大小朋友都吃得開心又安心！', '/images/product_img/prodImg_30_1.jpeg', NULL, NULL),
('Belli托斯卡尼脆餅-杏仁100g', 99, '義大利', 7, 100, 31, '甜', '1', '餅乾', '1', '賞味期限：杏仁100g\r\n蛋奶素\r\n義式脆餅「Biscotti」，即為義語烤兩次之意，是義大利傳統點心，二次烘焙而成的硬式餅乾，義大利人習慣配咖啡或甜酒Vin Santo沾著吃，享受更多層次的風味喔！', '/images/product_img/prodImg_31_1.jpeg', '/images/product_img/prodImg_31_2.jpeg', '/images/product_img/prodImg_31_3.jpeg'),
('三立薄燒餅乾-抹茶巧克力90g', 95, '日本', 1, 100, 32, '甜', '1', '餅乾', '1', '不管你是巧克力控還是抹茶控一定都會愛上這款商品～\r\n香醇且酥脆的奶油餅乾，再搭配上不同口味的濃郁內餡，兩者完美的結合，呈現出甜而不膩的口感，絕對是下午茶的最佳選擇！', '/images/product_img/prodImg_32_1.jpeg', NULL, NULL),
('Orion Custard 蛋黃派蛋糕138g', 59, '韓國', 6, 100, 33, '甜', '1', '其他', '5', '(6入/盒)\r\n來來來～席捲全亞洲的經典Orion夾心蛋糕派，相信各位嘴粉一定不陌生，也一定知道他有多～美味！\r\n一口咬下鬆軟蛋糕體，隨即而來內餡的濃郁牛奶/蛋黃香氣在嘴中噴發，也為蛋糕體增添濕潤口感，滑潤順口的滋味，真想一個接一個的吃著，光想像就口水直流～', '/images/product_img/prodImg_33_1.jpeg', NULL, NULL),
('菊泉堂胡麻道樂餅乾200g', 119, '日本', 1, 100, 34, '鹹', '2', '餅乾', '1', '(16入/袋)\r\n賞味期限：2022/02/10 (年/月/日)\r\n芝麻香氣搭上蛋奶香\r\n芝麻香氣搭上蛋奶香，最道地的日式點心，撲鼻的香氣、酥脆的口感讓人想一吃再吃！', '/images/product_img/prodImg_34_1.jpeg', NULL, NULL),
('寶製奶油鹽味起司餅132g', 119, '日本', 1, 100, 35, '鹹', '2', '餅乾', '1', '(12入/袋)\r\n特色：鹹甜交錯的豐富口感\r\n寶製果在二戰後成立，看著戰後生活在貧困中的日本，創辦人下了解決糧食短缺問題的決心，以製作麵包起家，直到小麥和糖的購買管制取消後，才轉為生產餅乾。這款餅乾也遵從了寶製果對於創造美味、安全和有保障的產品的信念，酥脆的餅乾外層搭配上濃郁的奶油鹽夾心，能夠品嚐到鹹甜交錯的豐富口感。', '/images/product_img/prodImg_35_1.png', NULL, NULL),
('Marukin厚切年輪蛋糕225g', 129, '日本', 1, 100, 36, '甜', '1', '其他', '5', '賞味期限：2022/01/17\r\n嚴選北海道鮮乳製作\r\n厚切口感綿密、味道甜而不膩\r\n獨立包裝隨身攜帶超方便\r\n日本的Marukins年輪蛋糕採用嚴選北海道鮮乳製作，口感綿密、味道甜而不膩，厚切更滿足！\r\n獨立包裝隨身攜帶超方便，最適合搭配咖啡或茶一起享用～', '/images/product_img/prodImg_36_1.jpeg', NULL, NULL),
('飛寶 LA CHOCITA 荷包蛋口味洋芋片135g', 109, '西班牙', 8, 100, 37, '鹹', '2', '洋芋片', '2', '賞味期限：2021/12/09 \r\n荷包蛋-蛋奶素\r\n你吃過荷包蛋口味洋芋片嗎？\r\n來自西班牙的飛寶洋芋片推出松露及荷包蛋兩種口味，與洋芋片搭配的滋味妙不可言，你一定要試試～', '/images/product_img/prodImg_37_1.jpeg', NULL, NULL),
('白色戀人巧克力餅乾', 699, '日本', 1, 100, 38, '甜', '1', '餅乾', '1', '70年代白色巧克力正當紅，石屋制果股份公司（石屋製菓株式會社）傷透腦筋想辦法開發出既能吃到白色巧克力，又可以不會沾到手的產品。最後得到的結論是用餅乾薄片夾住巧克力，白色戀人也就誕生了。\r\n白色戀人的製造商是位於札幌市的石屋製菓，1947年創業至今已有70年以上歷史的點心製造商。石屋製菓一開始是接受政府委託而成立的澱粉工業公司，而現在則搖身成為致力於為顧客提供美味與喜悅，創造幸福的點心製造商。', '/images/product_img/prodImg_38_1.jpg', '/images/product_img/prodImg_38_2.jpg', NULL),
('樂天小熊餅巧克力風味-37g', 30, '日本', 1, 100, 39, '甜', '1', '餅乾', '1', '暢銷多年的好滋味，可愛小熊共有200種圖案！', '/images/product_img/prodImg_39_1.jpeg', NULL, NULL),
('TOHATO鱷魚餅乾-20g', 130, '日本', 1, 100, 40, '甜', '1', '餅乾', '1', '[TOHATO] 蠟筆小新 鱷魚餅乾 20g\r\n頑皮的蠟筆小新卡通主人公－野原新之助的最愛！\r\n每天都吵著要美冴買給他吃的鱷魚餅乾。\r\n含有鈣質在裡面，吃起來酥脆的香濃巧克力餅乾。\r\n可愛的星星造型，一口一個的大小。\r\n入口即化的口感以及咬下去的酥脆聲響。\r\n身為蠟筆小新最愛的餅乾，果然是有原因的！\r\n超級好吃，絕對無法抵擋它的誘惑阿～\r\n裡面還有神祕的蠟筆小新系列貼紙，等你來收集。', '/images/product_img/prodImg_40_1.jpeg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `satisfaction`
--

CREATE TABLE `satisfaction` (
  `memberId` varchar(20) NOT NULL,
  `subNo` int(11) NOT NULL,
  `feedback1` varchar(5) NOT NULL,
  `feedback2` varchar(5) NOT NULL,
  `feedback3` varchar(5) NOT NULL,
  `feedback4` varchar(5) NOT NULL,
  `feedback_text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `satisfaction`
--

INSERT INTO `satisfaction` (`memberId`, `subNo`, `feedback1`, `feedback2`, `feedback3`, `feedback4`, `feedback_text`) VALUES
('', 210010001, '非常滿意', '滿意', '滿意', '滿意', 'this is the test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminaccount`
--
ALTER TABLE `adminaccount`
  ADD PRIMARY KEY (`adminId`);

--
-- Indexes for table `collectedprod`
--
ALTER TABLE `collectedprod`
  ADD PRIMARY KEY (`collectNo`),
  ADD KEY `prodId` (`prodId`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`memberId`);

--
-- Indexes for table `memberaccount`
--
ALTER TABLE `memberaccount`
  ADD PRIMARY KEY (`memberId`);

--
-- Indexes for table `normalorder`
--
ALTER TABLE `normalorder`
  ADD PRIMARY KEY (`orderNo`),
  ADD KEY `memberId` (`memberId`);

--
-- Indexes for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderListId`),
  ADD KEY `prodId` (`prodId`);

--
-- Indexes for table `prodlist`
--
ALTER TABLE `prodlist`
  ADD PRIMARY KEY (`prodId`);

--
-- Indexes for table `satisfaction`
--
ALTER TABLE `satisfaction`
  ADD PRIMARY KEY (`subNo`),
  ADD KEY `subNo` (`subNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collectedprod`
--
ALTER TABLE `collectedprod`
  MODIFY `collectNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `collectedprod`
--
ALTER TABLE `collectedprod`
  ADD CONSTRAINT `collectedprod_ibfk_1` FOREIGN KEY (`prodId`) REFERENCES `prodlist` (`prodId`);

--
-- Constraints for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD CONSTRAINT `orderlist_ibfk_1` FOREIGN KEY (`prodId`) REFERENCES `prodlist` (`prodId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
