let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript);
}

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    // ✅ Fix: Convert to lowercase and remove extra spaces
    message = message.trim().toLowerCase();

    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("hello") || message.includes("hey")) {
        speak("hello ,what can i help you?");
    }
    else if (message.includes("am i depressed")) {
        speak("i'm not a doctor, but i can help you reflect on your feelings Are you often feeling hopeless, tired, or uninterested in things you usually enjoy? If yes, it could be a good idea to speak with a mental health expert. I can also help you track your mood if you d like");
    }
    else if (message.includes("why do i feel anxious all the time")) {
        speak("constant anxiety can be caused by stress or overthinking try to relax take deep breaths and speak to someone you trust");
    }
    else if (message.includes("i cannot sleep at night")) {
        speak("poor sleep can be due to stress or anxiety try to avoid screens before bed and relax your mind with breathing exercises");
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant, created by somya");
    }
    else if (message.includes("i feel lonely")) {
        speak("feeling lonely is common you can try reaching out to friends or family or talk to a counselor for support");
    }
    else if (message.includes("how to control my anger")) {
        speak("take a deep breath walk away from the situation and give yourself time to cool down practice calming techniques daily");
    }
    else if (message.includes("why do i cry without reason")) {
        speak("crying without reason could be a sign of emotional stress or depression it is okay to seek help from a professional");
    }
    else if (message.includes("i feel like nothing matters")) {
        speak("feeling like nothing matters can be a symptom of depression please talk to someone you trust or a mental health expert");
    }
    else if (message.includes("i overthink everything")) {
        speak("overthinking can lead to stress try writing down your thoughts or practice mindfulness to clear your mind");
    }
    else if (message.includes("why do i feel scared without reason")) {
        speak("feeling scared for no reason can be a sign of anxiety try deep breathing or talk to a mental health counselor");
    }
    else if (message.includes("i feel emotionally tired")) {
        speak("emotional tiredness can come from carrying too much stress talk to someone and take time to care for yourself");
    }
    else if (message.includes("what is ptsd")) {
        speak("ptsd stands for post traumatic stress disorder it happens after experiencing a very stressful or scary event and can cause nightmares flashbacks or fear");
    }
    else if (message.includes("am i suffering from ptsd")) {
        speak("if you often have flashbacks bad dreams or avoid certain places after a trauma you might have ptsd please talk to a professional");
    }
    else if (message.includes("why do i get flashbacks")) {
        speak("flashbacks can be a sign of ptsd your brain might still be processing a painful experience consider speaking with a mental health expert");
    }
    else if (message.includes("i cannot forget a bad event")) {
        speak("it is hard to move on from painful memories but you can heal with time support and talking to a therapist");
    }
    else if (message.includes("i feel scared at night")) {
        speak("feeling scared at night could be linked to anxiety ptsd or stress try to stay calm breathe deeply and seek support if it continues");
    }
    else if (message.includes("how do i deal with panic attack")) {
        speak("during a panic attack try to take slow deep breaths ground yourself by touching something and remind yourself that it will pass");
    }
    else if (message.includes("i feel anxious all the time")) {
        speak("constant anxiety can affect your daily life consider relaxation exercises and talking to a mental health expert");
    }
    else if (message.includes("why do i feel empty inside")) {
        speak("feeling empty can be a sign of depression or emotional stress please talk to someone you trust or seek help");
    }
    else if (message.includes("why am i always tired")) {
        speak("being tired all the time might be due to stress anxiety or depression a proper rest routine and support can help");
    }
    else if (message.includes("i do not enjoy anything anymore")) {
        speak("losing interest in things you once liked could be a sign of depression try doing small enjoyable tasks and seek help if it continues");
    }
    else if (message.includes("i feel worthless")) {
        speak("feeling worthless is painful but not true everyone has value and you deserve care and support");
    }
    else if (message.includes("i am scared to talk to people")) {
        speak("fear of talking to people may be social anxiety try small steps and consider therapy to feel more confident");
    }
    else if (message.includes("my heart beats fast when im nervous")) {
        speak("a fast heartbeat when nervous is common in anxiety take deep breaths and try grounding techniques to calm down");
    }
    else if (message.includes("i feel like everyone hates me")) {
        speak("feeling like everyone hates you may be linked to low self esteem or anxiety talk to someone you trust and remember your worth");
    }
    else if (message.includes("i feel like crying without reason")) {
        speak("random crying may be due to emotional stress or depression try to express your feelings or talk to someone who understands");
    }
    else if (message.includes("why do i feel so alone")) {
        speak("feeling alone can happen even when people are around reaching out and talking to someone can help ease that feeling");
    }
    else if (message.includes("i get angry easily")) {
        speak("getting angry quickly can be a result of stress or emotional struggles try to pause and breathe before reacting");
    }
    else if (message.includes("i cant focus on anything")) {
        speak("lack of focus may be caused by anxiety or stress try setting small goals and taking breaks it can help improve focus");
    }
    else if (message.includes("i feel like a failure")) {
        speak("everyone struggles sometimes feeling like a failure is not true you are trying and that matters a lot");
    }
    else if (message.includes("i feel pressure all the time")) {
        speak("feeling constant pressure can lead to burnout try to take breaks and talk to someone about your feelings");
    }
    else if (message.includes("why do i overthink everything")) {
        speak("overthinking is common in anxiety try writing your thoughts down or using breathing techniques to calm your mind");
    }
    else if (message.includes("i feel like im not good enough")) {
        speak("you are more than enough self doubt happens but you deserve love support and kindness");
    }
    else if (message.includes("i get scared for no reason")) {
        speak("random fear can be a sign of anxiety try calming techniques and seek help if it happens often");
    }
    else if (message.includes("i dont want to talk to anyone")) {
        speak("not wanting to talk can be a sign of emotional overload or depression give yourself space and talk when you are ready");
    }
    else if (message.includes("i feel something is wrong with me")) {
        speak("it is okay to feel that way sometimes but you are not broken talking to a mental health expert can really help");
    }
    else if (message.includes("i want to feel better")) {
        speak("you can feel better healing takes time start with small steps and remember you are not alone");
    }
    else if (message.includes("why do i feel nervous in crowds")) {
        speak("feeling nervous in crowds is common in social anxiety try deep breathing and small exposures to build comfort");
    }
    else if (message.includes("i feel like im being watched")) {
        speak("feeling watched can be related to anxiety or paranoia if it happens often speak to a professional for support");
    }
    else if (message.includes("i cannot stop negative thoughts")) {
        speak("negative thoughts can feel overwhelming but mindfulness and therapy can help manage them");
    }
    else if (message.includes("i dont trust anyone")) {
        speak("trust issues can come from past pain or trauma talking to someone can help you heal and open up again");
    }
    else if (message.includes("i fear the future")) {
        speak("fear of the future is normal try focusing on the present and taking small steps to manage your worries");
    }
    else if (message.includes("i want to disappear")) {
        speak("feeling this way means you are overwhelmed you deserve support and care please reach out to someone");
    }
    else if (message.includes("i feel emotionally numb")) {
        speak("emotional numbness can be a sign of depression or trauma it is okay to ask for help and talk about it");
    }
    else if (message.includes("i feel like im drowning in my thoughts")) {
        speak("overwhelming thoughts can be a sign of anxiety or depression grounding techniques and support can help");
    }
    else if (message.includes("i feel unsafe in my own mind")) {
        speak("feeling unsafe mentally can be serious please talk to a trusted person or mental health expert");
    }
    else if (message.includes("i get nightmares every night")) {
        speak("frequent nightmares could be a sign of ptsd or stress relaxation before sleep might help but support is important");
    }
    else if (message.includes("i feel disconnected from reality")) {
        speak("feeling disconnected can be a sign of dissociation or stress grounding yourself can help and support is key");
    }
    else if (message.includes("why do i feel like im not real")) {
        speak("this feeling is called derealization it can happen with anxiety or trauma and support can help you feel stable again");
    }
    else if (message.includes("i cant control my emotions")) {
        speak("emotional swings can happen with stress or mental health struggles talking to someone can help you manage better");
    }
    else if (message.includes("i feel like im always being judged")) {
        speak("feeling judged often comes from anxiety remember people focus more on themselves than others");
    }
    else if (message.includes("i overthink past mistakes")) {
        speak("dwelling on the past is common but self compassion can help you move forward");
    }
    else if (message.includes("i get sudden fear with no reason")) {
        speak("sudden fear could be a panic attack try to breathe deeply and ground yourself with what you see and feel");
    }
    else if (message.includes("i feel like screaming but stay quiet")) {
        speak("holding in emotions can hurt express them in a safe way like writing or talking to someone you trust");
    }
    else if (message.includes("i feel trapped in my own mind")) {
        speak("feeling trapped is hard you are not alone and talking to someone can help you feel free again");
    }
    else if (message.includes("i feel like im a burden")) {
        speak("you are not a burden your feelings matter and the people who care about you want to help");
    }
    else if (message.includes("i want to stop feeling this way")) {
        speak("you can feel better with time support and small steps forward dont give up you are strong");
    }
    else if (message.includes("i feel tired of pretending to be okay")) {
        speak("pretending to be okay is exhausting you deserve to express how you truly feel and ask for support");
    }
    else if (message.includes("i feel broken")) {
        speak("you are not broken you are human with pain that can heal over time with support");
    }
    else if (message.includes("i feel like i have no control")) {
        speak("feeling out of control can be scary but small routines and talking to someone can help you feel grounded");
    }
    else if (message.includes("why do i feel sad for no reason")) {
        speak("sometimes sadness comes without clear reason it could be depression or emotional exhaustion support can help");
    }
    else if (message.includes("i want to be alone forever")) {
        speak("wanting to be alone for a long time can be a sign of depression you deserve connection and care");
    }
    else if (message.includes("i cant express my feelings")) {
        speak("it is okay if you struggle to express feelings try writing them down or talking to someone patient");
    }
    else if (message.includes("i feel like no one understands me")) {
        speak("feeling misunderstood is painful but you are not alone the right people will listen and care");
    }
    else if (message.includes("i feel ashamed of my emotions")) {
        speak("your emotions are valid you should not feel shame for being human and feeling deeply");
    }
    else if (message.includes("i feel like im losing myself")) {
        speak("losing yourself can happen when stressed or hurt take time for self care and talk to someone who supports you");
    }
    else if (message.includes("i feel like giving up")) {
        speak("please dont give up you matter more than you know and things can get better with help");
    }
    else if (message.includes("i feel numb and tired")) {
        speak("feeling numb and tired might be burnout or depression rest and support are important");
    }
    else if (message.includes("i think i am not normal")) {
        speak("normal is different for everyone you are unique and you deserve to feel accepted and supported");
    }
    else if (message.includes("i feel pain in my chest when im anxious")) {
        speak("chest pain can happen during anxiety take slow breaths and seek support if it keeps happening");
    }
    else if (message.includes("i feel like i will never be happy again")) {
        speak("happiness can return with time and healing dont lose hope you are not alone in this");
    }
    else if (message.includes("i feel like nobody would care if i disappear")) {
        speak("your life matters and there are people who care even if it doesnt feel like it right now please talk to someone");
    }
    else if (message.includes("i am scared to sleep")) {
        speak("fear of sleep can come from nightmares or trauma a calm bedtime routine and support may help");
    }
    else if (message.includes("i feel overwhelmed by small tasks")) {
        speak("when your mind is exhausted even small tasks feel big take one step at a time and be gentle with yourself");
    }
    else if (message.includes("i feel stuck in one place")) {
        speak("feeling stuck is common during emotional pain small progress each day can lead to big change over time");
    }
    else if (message.includes("i want to feel loved")) {
        speak("you deserve love and care try to surround yourself with people who uplift and support you");
    }
    else if (message.includes("i feel like i dont belong")) {
        speak("you belong and you matter sometimes it takes time to find the right place and people for you");
    }
    else if (message.includes("i feel like im always on edge")) {
        speak("feeling on edge may be a sign of anxiety grounding exercises and rest can help ease the tension");
    }
    else if (message.includes("i dont know what im feeling")) {
        speak("emotions can be confusing and mixed take time to explore them and talk to someone if needed");
    }
    else if (message.includes("why cant i sleep even when tired")) {
        speak("sleep troubles may come from stress or overthinking calming activities and support can help");
    }
    else if (message.includes("i always expect the worst")) {
        speak("expecting the worst can be a defense from past hurt but it also adds stress try to challenge those thoughts gently");
    }
    else if (message.includes("i want to feel safe again")) {
        speak("safety starts with support and care healing from fear takes time but it is possible");
    }
    else if (message.includes("i feel judged for my feelings")) {
        speak("your feelings are valid no one should judge you for them please talk to someone who understands and cares");
    }
    else if (message.includes("i feel like im losing control of my thoughts")) {
        speak("racing thoughts can be part of anxiety or stress calming techniques and support can help you feel stable again");
    }
    else if (message.includes("i want the pain to stop")) {
        speak("you deserve relief from pain and there are people who can help please reach out you are not alone");
    }
    else if (message.includes("i feel empty inside")) {
        speak("feeling empty can come from depression or loss talking to someone can help you reconnect with yourself");
    }
    else if (message.includes("i get angry without reason")) {
        speak("unexpected anger may come from stress or trauma finding the cause with help can bring relief");
    }
    else if (message.includes("i feel tired all the time")) {
        speak("constant tiredness can be emotional fatigue or depression try resting and seeking support if it continues");
    }
    else if (message.includes("i avoid people even my friends")) {
        speak("withdrawing from others can be a sign of emotional struggle talking to a kind person can help you reconnect");
    }
    else if (message.includes("i cant enjoy things i used to")) {
        speak("losing interest in things you love may be a sign of depression small steps can help bring joy back");
    }
    else if (message.includes("i always feel guilty")) {
        speak("constant guilt can be a burden from past pain or stress you deserve compassion and healing");
    }
    else if (message.includes("i feel like crying for no reason")) {
        speak("tears can be your mind releasing pain you might not fully understand talking about it can help");
    }
    else if (message.includes("i feel too much and then nothing")) {
        speak("emotional swings can be exhausting it helps to talk and find balance over time");
    }
    else if (message.includes("i feel like something bad will happen")) {
        speak("this is a common feeling in anxiety grounding and focusing on the present can ease the worry");
    }
    else if (message.includes("i think im not good enough")) {
        speak("you are enough just as you are you may not see it now but healing can help you believe it");
    }
    else if (message.includes("i get overwhelmed by noise")) {
        speak("sensitivity to noise can happen in anxiety or ptsd creating a quiet space may bring calm");
    }
    else if (message.includes("i feel like im always failing")) {
        speak("failure is part of growth you are not failing you are learning and growing through struggles");
    }
    else if (message.includes("i feel like running away from everything")) {
        speak("wanting to escape shows overwhelm you deserve rest and support not isolation");
    }
    else if (message.includes("i feel like my heart races for no reason")) {
        speak("a racing heart is a common sign of anxiety deep breathing and grounding can help calm it");
    }
    else if (message.includes("i dont feel safe in my own room")) {
        speak("this could be connected to ptsd or fear talking to someone can help you feel safe again");
    }
    else if (message.includes("i feel like i should not exist")) {
        speak("you do matter and your presence is valuable please talk to someone you are not alone");
    }
    else if (message.includes("i feel like screaming inside")) {
        speak("internal screams show pain try to release it gently through expression or support");
    }
    else if (message.includes("i cannot focus on anything")) {
        speak("lack of focus can happen with anxiety depression or stress try taking short mindful breaks");
    }
    else if (message.includes("i feel weak for feeling this way")) {
        speak("you are not weak for feeling pain it takes strength to face and talk about your emotions");
    }
    else if (message.includes("i hate myself")) {
        speak("self hate is heavy and painful you deserve kindness and support healing is possible");
    }
    else if (message.includes("i feel like i have no identity")) {
        speak("losing your sense of self can happen in emotional struggles finding support can help rebuild it");
    }
    else if (message.includes("i want to hide from the world")) {
        speak("hiding can feel safe during pain but connection and support help you heal and grow");
    }
    else if (message.includes("i feel like im being watched in the dark")) {
        speak("this fear could come from anxiety or past trauma try calming techniques and support");
    }
    else if (message.includes("i dont feel real emotions anymore")) {
        speak("emotional numbness is a response to pain or trauma you can reconnect through support and healing");
    }
    else if (message.includes("i want to talk but i freeze")) {
        speak("freezing is a natural reaction to emotional pain try writing your thoughts first or speaking slowly");
    }
    else if (message.includes("i get startled easily")) {
        speak("easily startled responses are common in ptsd and anxiety try calming routines and talk to someone");
    }
    else if (message.includes("i feel like everyone is against me")) {
        speak("this may be a sign of deep stress or fear support can help you see the care that surrounds you");
    }
    else if (message.includes("i cant relax even when im alone")) {
        speak("your mind may be stuck in alert mode grounding and therapy can help you feel peace again");
    }
    else if (message.includes("i feel like im drowning in silence")) {
        speak("silence can feel loud when you are hurting try to talk to someone or listen to gentle sounds that comfort you");
    }
    else if (message.includes("i feel fear without cause")) {
        speak("this is common in anxiety or ptsd breathing and grounding can help calm your mind");
    }
    else if (message.includes("i feel like everyone will leave me")) {
        speak("this fear often comes from past hurt you deserve stable and caring connections");
    }
    else if (message.includes("i feel like my body is heavy")) {
        speak("emotional pain can feel physical too rest and support can ease that weight over time");
    }
    else if (message.includes("i want to sleep forever")) {
        speak("this can be a sign of depression your life matters please seek support you are not alone");
    }
    else if (message.includes("i feel like im a ghost")) {
        speak("feeling invisible is painful you deserve to be seen and heard by people who care");
    }
    else if (message.includes("i dont feel human")) {
        speak("this can happen when deeply disconnected you can feel whole again with support and time");
    }
    else if (message.includes("i feel frozen when someone talks to me")) {
        speak("freezing in conversation can come from anxiety try deep breaths and practice gentle speaking");
    }
    else if (message.includes("i cant find joy in anything")) {
        speak("losing joy is a sign of emotional fatigue or depression healing takes time but joy can return");
    }
    else if (message.includes("i feel like im stuck in the past")) {
        speak("being stuck in the past is common with trauma support and small steps can bring you to the present");
    }
    else if (message.includes("i get scared by loud sounds")) {
        speak("loud sounds can trigger anxiety or ptsd calming your space and support can help you feel safe");
    }
    else if (message.includes("i feel like time has stopped")) {
        speak("this can be a dissociative feeling often linked to emotional pain grounding techniques can help you return to now");
    }
    else if (message.includes("i think everyone hates me")) {
        speak("this thought can come from low self worth or anxiety talking to a kind person can show you otherwise");
    }
    else if (message.includes("i feel like something is wrong with me")) {
        speak("nothing is wrong with you your feelings are a response to pain and healing is possible");
    }
    else if (message.includes("i cannot be alone with my thoughts")) {
        speak("being alone with thoughts can be scary background music or talking to someone can ease the fear");
    }
    else if (message.includes("i feel like my brain is foggy")) {
        speak("brain fog can be a sign of emotional or mental strain rest and support can help you clear your mind");
    }
    else if (message.includes("i feel like im stuck in a nightmare")) {
        speak("this is a common feeling in ptsd or deep stress you are not alone and you can wake up from it with help");
    }
    else if (message.includes("i feel like i failed in life")) {
        speak("failure is not the end it is a step on your journey you can rise again with support and belief in yourself");
    }


else if (message.includes("what are signs of depression")) {
    speak("Common signs include persistent sadness loss of interest in activities changes in sleep or appetite and feelings of worthlessness If you notice these lasting more than two weeks consider speaking with a professional");
}
else if (message.includes("how to calm anxiety attack")) {
    speak("Focus on slow breathing in through your nose and out through your mouth Name five things you can see around you to ground yourself Remember this will pass");
}
else if (message.includes("difference between sadness and depression")) {
    speak("Sadness is temporary while depression persists for weeks and affects daily functioning Depression often includes physical symptoms and loss of pleasure in most activities");
}
else if (message.includes("best ways to reduce stress")) {
    speak("Regular exercise deep breathing exercises maintaining a consistent sleep schedule and talking about your feelings can all help manage stress effectively");
}
else if (message.includes("how to help someone with depression")) {
    speak("Listen without judgment encourage professional help offer practical support and remind them they matter Avoid telling them to just cheer up or snap out of it");
}
else if (message.includes("physical symptoms of anxiety")) {
    speak("Anxiety can cause rapid heartbeat sweating trembling stomach issues muscle tension headaches and shortness of breath These are normal stress responses");
}
else if (message.includes("what causes panic attacks")) {
    speak("Panic attacks can be triggered by stress major life changes or sometimes occur unexpectedly They result from the body's fight or flight system activating unnecessarily");
}
else if (message.includes("how to improve mental health daily")) {
    speak("Practice gratitude get sunlight exercise stay connected with others limit screen time before bed and make time for activities you enjoy");
}
else if (message.includes("when to seek therapy")) {
    speak("Consider therapy when emotions feel overwhelming interfere with daily life relationships or work or if you're using unhealthy coping mechanisms");
}
else if (message.includes("types of mental health professionals")) {
    speak("Options include psychiatrists psychologists licensed counselors social workers and psychiatric nurses Each has different training and specialties");
}
else if (message.includes("how to stop negative thoughts")) {
    speak("Challenge negative thoughts by asking if they're factual replace them with balanced thoughts practice mindfulness and focus on small positive actions");
}
else if (message.includes("what is cognitive behavioral therapy")) {
    speak("CBT is a therapy that helps identify and change negative thought patterns and behaviors It's effective for depression anxiety and many mental health conditions");
}
else if (message.includes("benefits of meditation for mental health")) {
    speak("Meditation can reduce stress improve focus increase self-awareness promote emotional health and help manage symptoms of anxiety and depression");
}
else if (message.includes("how to build self esteem")) {
    speak("Practice self-compassion challenge negative self-talk set realistic goals celebrate small wins and surround yourself with supportive people");
}
else if (message.includes("what is bipolar disorder")) {
    speak("Bipolar disorder involves extreme mood swings between emotional highs called mania and lows of depression It requires professional diagnosis and treatment");
}
else if (message.includes("how to support someone with anxiety")) {
    speak("Be patient learn about anxiety avoid minimizing their feelings help with breathing techniques and encourage professional help without pushing too hard");
}
else if (message.includes("natural ways to reduce anxiety")) {
    speak("Regular exercise deep breathing limiting caffeine practicing mindfulness getting enough sleep and herbal teas like chamomile may help reduce anxiety");
}
else if (message.includes("what is social anxiety disorder")) {
    speak("Social anxiety involves intense fear of social situations often due to worry about being judged It can cause physical symptoms and avoidance of social interactions");
}
else if (message.includes("how to sleep better with anxiety")) {
    speak("Establish a bedtime routine limit screen time before bed try relaxation techniques keep a worry journal and create a comfortable sleep environment");
}
else if (message.includes("what is obsessive compulsive disorder")) {
    speak("OCD involves unwanted recurring thoughts and repetitive behaviors done to reduce anxiety It requires professional treatment often with therapy and medication");
}
else if (message.includes("how to manage work stress")) {
    speak("Set clear boundaries take regular breaks prioritize tasks communicate needs with managers and practice stress management techniques during the workday");
}
else if (message.includes("what is trauma therapy")) {
    speak("Trauma therapy helps process traumatic experiences using approaches like EMDR or trauma-focused CBT to reduce their emotional impact and symptoms");
}
else if (message.includes("how to help a suicidal friend")) {
    speak("Take any talk of suicide seriously listen without judgment remove means of harm stay with them and help them contact a mental health professional immediately");
}
else if (message.includes("what is seasonal affective disorder")) {
    speak("SAD is depression that occurs seasonally often in winter due to reduced sunlight Light therapy medication and counseling can help manage symptoms");
}
else if (message.includes("how to deal with health anxiety")) {
    speak("Limit health research online practice mindfulness challenge catastrophic thoughts maintain regular doctor visits but avoid excessive checking");
}
else if (message.includes("what is borderline personality disorder")) {
    speak("BPD involves emotional instability intense relationships fear of abandonment and impulsive behavior Therapy like DBT can be very effective for management");
}
else if (message.includes("how to stop panic attacks naturally")) {
    speak("Practice deep breathing use grounding techniques exercise regularly reduce caffeine and sugar and learn to recognize early warning signs");
}
else if (message.includes("what is dissociative disorder")) {
    speak("Dissociative disorders involve disconnection between thoughts identity consciousness and memory often developing as a response to trauma");
}
else if (message.includes("how to overcome fear of public speaking")) {
    speak("Start small practice thoroughly visualize success focus on breathing join a speaking group and remember audiences want you to succeed");
}
else if (message.includes("what is schizophrenia")) {
    speak("Schizophrenia is a serious mental disorder affecting how a person thinks feels and behaves often involving hallucinations delusions and disordered thinking");
}
else if (message.includes("how to deal with intrusive thoughts")) {
    speak("Label them as just thoughts don't fight them practice mindfulness focus on the present and seek therapy if they cause significant distress");
}
else if (message.includes("what is emotional intelligence")) {
    speak("Emotional intelligence is the ability to understand manage and express your emotions while recognizing and responding to others' emotions appropriately");
}
else if (message.includes("how to handle grief and loss")) {
    speak("Allow yourself to feel the pain seek support from others maintain routines when possible express your feelings and be patient with the healing process");
}
else if (message.includes("what is autism spectrum disorder")) {
    speak("ASD is a developmental condition affecting communication and behavior with varying symptoms including social challenges and repetitive behaviors");
}
else if (message.includes("how to manage social media anxiety")) {
    speak("Set time limits curate your feed to positive content take regular breaks remember posts aren't reality and focus on in-person connections");
}
else if (message.includes("what is ADHD")) {
    speak("Attention deficit hyperactivity disorder involves difficulty focusing hyperactivity and impulsiveness It can be managed with therapy medication and lifestyle changes");
}
else if (message.includes("how to stop emotional eating")) {
    speak("Identify triggers practice mindful eating find alternative coping strategies keep healthy snacks available and address underlying emotional needs");
}
else if (message.includes("what is imposter syndrome")) {
    speak("Imposter syndrome involves feeling like a fraud despite evidence of competence It's common among high achievers and can be managed with self-reflection");
}
else if (message.includes("how to set healthy boundaries")) {
    speak("Identify your limits communicate them clearly enforce consequences calmly start with small boundaries and practice self-assertion skills");
}
else if (message.includes("what is eating disorder")) {
    speak("Eating disorders are serious mental health conditions involving unhealthy relationships with food and body image like anorexia bulimia or binge eating disorder");
}
else if (message.includes("how to practice mindfulness")) {
    speak("Focus on present moments observe thoughts without judgment practice deep breathing do one thing at a time and use mindfulness apps for guidance");
}
else if (message.includes("what is burnout")) {
    speak("Burnout is emotional physical and mental exhaustion caused by prolonged stress It leads to reduced performance and detachment from work or responsibilities");
}
else if (message.includes("how to overcome perfectionism")) {
    speak("Challenge all-or-nothing thinking set realistic standards focus on progress not perfection and practice self-compassion when mistakes happen");
}
else if (message.includes("what is narcissistic personality disorder")) {
    speak("NPD involves an inflated sense of self-importance need for admiration and lack of empathy It requires professional diagnosis and treatment");
}
else if (message.includes("how to deal with toxic people")) {
    speak("Set firm boundaries limit interactions don't take their behavior personally focus on your wellbeing and seek support when needed");
}
else if (message.includes("what is self care")) {
    speak("Self care involves intentional activities to maintain physical mental and emotional health It includes basics like sleep as well as enjoyable activities");
}
else if (message.includes("how to stop people pleasing")) {
    speak("Practice saying no identify your own needs first recognize your worth isn't tied to helping others and start with small refusals");
}
else if (message.includes("what is emotional abuse")) {
    speak("Emotional abuse involves behaviors that damage self-worth or emotional health including manipulation gaslighting verbal attacks and excessive control");
}
else if (message.includes("how to develop resilience")) {
    speak("Build strong relationships maintain a hopeful outlook accept change as part of life take decisive action and nurture a positive view of yourself");
}
else if (message.includes("what is talk therapy")) {
    speak("Talk therapy involves working with a mental health professional to explore feelings thoughts and behaviors to improve mental health and wellbeing");
}
else if (message.includes("how to handle criticism")) {
    speak("Pause before reacting consider if there's truth in it separate your worth from the feedback and use constructive criticism as an opportunity to grow");
}
else if (message.includes("what is anxiety disorder")) {
    speak("Anxiety disorders involve excessive fear or worry that interferes with daily life Types include generalized anxiety panic disorder and phobias");
}
else if (message.includes("how to improve body image")) {
    speak("Focus on what your body can do limit media that triggers comparisons practice self-acceptance surround yourself with body-positive messages");
}
else if (message.includes("what is postpartum depression")) {
    speak("PPD is depression occurring after childbirth involving intense sadness anxiety and exhaustion that makes caring for baby and oneself difficult");
}
else if (message.includes("how to manage financial stress")) {
    speak("Create a realistic budget prioritize essential expenses seek financial counseling explore assistance programs and practice stress-reduction techniques");
}
else if (message.includes("what is personality disorder")) {
    speak("Personality disorders involve rigid unhealthy patterns of thinking and behaving that differ from cultural expectations and cause relationship problems");
}
else if (message.includes("how to stop catastrophizing")) {
    speak("Challenge worst-case scenario thinking examine evidence for and against your fears focus on problem-solving and practice mindfulness of the present");
}
else if (message.includes("what is EMDR therapy")) {
    speak("Eye movement desensitization and reprocessing is a therapy that helps process traumatic memories using bilateral stimulation like eye movements");
}
else if (message.includes("how to deal with loneliness")) {
    speak("Reach out to others even briefly join groups with shared interests volunteer practice self-compassion and consider adopting a pet if possible");
}
else if (message.includes("what is mental health first aid")) {
    speak("Mental health first aid teaches how to help someone developing a mental health problem or experiencing a crisis until professional help is available");
}
else if (message.includes("how to handle rejection")) {
    speak("Allow yourself to feel the pain but don't dwell challenge negative self-talk remember rejection is universal and focus on your strengths");
}
else if (message.includes("what is dissociative identity disorder")) {
    speak("DID formerly called multiple personality disorder involves two or more distinct identities controlling a person's behavior with memory gaps between them");
}
else if (message.includes("how to practice self compassion")) {
    speak("Treat yourself as you would a good friend recognize everyone struggles practice mindfulness and challenge your inner critic");
}
else if (message.includes("what is DBT therapy")) {
    speak("Dialectical behavior therapy combines CBT with mindfulness to help manage emotions improve relationships and develop healthy coping skills");
}
else if (message.includes("how to manage chronic pain mentally")) {
    speak("Practice relaxation techniques try cognitive behavioral therapy join support groups maintain social connections and focus on what you can control");
}
else if (message.includes("what is agoraphobia")) {
    speak("Agoraphobia involves fear of situations where escape might be difficult often leading to avoidance of crowds public transport or open spaces");
}
else if (message.includes("how to stop self sabotage")) {
    speak("Identify patterns behind self-sabotage challenge fear of success set small achievable goals and practice self-acceptance of imperfections");
}
else if (message.includes("what is somatic symptom disorder")) {
    speak("SSD involves extreme focus on physical symptoms causing major distress and problems functioning though medical exams don't find serious causes");
}
else if (message.includes("how to develop emotional resilience")) {
    speak("Build strong relationships maintain perspective accept change practice self-care develop problem-solving skills and nurture a positive self-view");
}
else if (message.includes("what is conversion disorder")) {
    speak("Conversion disorder involves neurological symptoms like paralysis or seizures without medical explanation often linked to psychological stress");
}
else if (message.includes("how to handle family conflict")) {
    speak("Set boundaries communicate calmly use I statements pick your battles consider family therapy and know when to take space from toxic situations");
}
else if (message.includes("what is adjustment disorder")) {
    speak("Adjustment disorder is an emotional or behavioral reaction to a stressful life event that's more severe than typical and affects daily functioning");
}
else if (message.includes("how to stop comparing yourself to others")) {
    speak("Limit social media focus on your own progress practice gratitude recognize everyone has struggles and define success on your own terms");
}
else if (message.includes("what is psychosomatic illness")) {
    speak("Psychosomatic conditions involve real physical symptoms caused or worsened by mental factors like stress though not faked or imagined by the patient");
}
else if (message.includes("how to manage holiday stress")) {
    speak("Set realistic expectations budget wisely maintain routines say no to excessive obligations and make time for self-care amid the busyness");
}
else if (message.includes("what is body dysmorphic disorder")) {
    speak("BDD involves obsessive focus on perceived flaws in appearance that others don't see causing significant distress and impaired functioning");
}
else if (message.includes("how to handle life transitions")) {
    speak("Acknowledge the change as a process maintain routines where possible seek support practice self-care and be patient with adjustment periods");
}
else if (message.includes("what is selective mutism")) {
    speak("Selective mutism is an anxiety disorder where someone can't speak in certain social situations despite speaking normally in other contexts");
}
else if (message.includes("how to develop positive thinking")) {
    speak("Practice gratitude challenge negative thoughts surround yourself with positive influences celebrate small wins and reframe challenges as opportunities");
}
else if (message.includes("what is illness anxiety disorder")) {
    speak("Formerly hypochondria this involves excessive worry about having a serious illness despite medical reassurance and minimal or no symptoms");
}
else if (message.includes("how to manage caregiver stress")) {
    speak("Set realistic expectations accept help when offered take regular breaks maintain your own health and seek support groups for caregivers");
}
else if (message.includes("what is intermittent explosive disorder")) {
    speak("IED involves repeated impulsive aggressive outbursts disproportionate to the situation often including verbal fights or property damage");
}
else if (message.includes("how to build healthy relationships")) {
    speak("Practice open communication set mutual boundaries show appreciation resolve conflicts constructively and maintain individual identities within the relationship");
}
else if (message.includes("what is schizoaffective disorder")) {
    speak("Schizoaffective disorder combines symptoms of schizophrenia like hallucinations with mood disorder symptoms like depression or mania");
}
else if (message.includes("how to stop negative self talk")) {
    speak("Notice when it happens challenge the thoughts with evidence replace with neutral or positive statements and practice self-compassion daily");
}
else if (message.includes("what is trichotillomania")) {
    speak("Trichotillomania is a hair-pulling disorder where people can't resist urges to pull out hair from scalp eyebrows or other areas");
}
else if (message.includes("how to manage work life balance")) {
    speak("Set clear boundaries prioritize effectively learn to say no schedule personal time and remember that rest increases productivity long-term");
}
else if (message.includes("what is depersonalization disorder")) {
    speak("Depersonalization involves persistent feelings of being detached from one's body or thoughts like an outside observer of oneself");
}
else if (message.includes("how to handle social rejection")) {
    speak("Acknowledge the hurt but don't generalize remind yourself of your worth focus on supportive relationships and keep engaging socially");
}
else if (message.includes("what is kleptomania")) {
    speak("Kleptomania involves recurrent failure to resist impulses to steal items not needed for personal use or monetary value");
}
else if (message.includes("how to develop assertiveness")) {
    speak("Practice clear direct communication use I statements maintain eye contact start with low-risk situations and respect others while stating your needs");
}
else if (message.includes("what is oppositional defiant disorder")) {
    speak("ODD in children involves angry irritable mood argumentative defiant behavior and vindictiveness lasting at least six months");
}
else if (message.includes("how to manage health anxiety")) {
    speak("Limit health research online schedule worry time rather than constant checking practice mindfulness and maintain regular but not excessive checkups");
}
else if (message.includes("what is conduct disorder")) {
    speak("Conduct disorder in youth involves serious behavioral problems like aggression destruction deceitfulness or rule violation that violate others' rights");
}
else if (message.includes("how to handle public embarrassment")) {
    speak("Remember most people forget quickly don't magnify the event laugh at yourself when appropriate and focus on moving forward");
}
else if (message.includes("what is pica")) {
    speak("Pica involves eating non-food substances like dirt or chalk over at least one month inappropriate to developmental level and not culturally supported");
}
else if (message.includes("how to stop over apologizing")) {
    speak("Pause before apologizing distinguish between responsibility and circumstance replace sorry with thank you when appropriate and build self-confidence");
}
else if (message.includes("what is rumination disorder")) {
    speak("Rumination disorder involves repeated regurgitation of food that's rechewed reswallowed or spit out not due to medical condition for at least one month");
}
else if (message.includes("how to manage academic stress")) {
    speak("Break tasks into steps use a planner take regular study breaks maintain healthy sleep and diet and remember grades don't define your worth");
}
else if (message.includes("what is avoidant restrictive food intake disorder")) {
    speak("ARFID involves disturbed eating from lack of interest sensory issues or concern about consequences not related to body image concerns");
}
else if (message.includes("how to handle performance anxiety")) {
    speak("Prepare thoroughly practice under simulated conditions focus on the process not outcome use relaxation techniques and reframe nerves as excitement");
}
else if (message.includes("what is reactive attachment disorder")) {
    speak("RAD in children involves emotionally withdrawn behavior toward caregivers with minimal seeking of comfort when distressed due to insufficient care");
}
else if (message.includes("how to develop healthy coping skills")) {
    speak("Identify triggers choose positive outlets like exercise or art build a support system practice self-care and seek professional guidance when needed");
}
else if (message.includes("what is disinhibited social engagement disorder")) {
    speak("DSED in children involves overly familiar behavior with strangers due to insufficient care including willingness to go with unfamiliar adults");
}
else if (message.includes("how to manage relationship anxiety")) {
    speak("Communicate openly challenge catastrophic thinking practice self-soothing maintain your own interests and consider therapy for deep-seated fears");
}
else if (message.includes("what is stereotypic movement disorder")) {
    speak("SMD involves repetitive seemingly driven nonfunctional motor behavior like hand waving body rocking or self-biting that interferes with activities");
}
else if (message.includes("how to handle creative block")) {
    speak("Take breaks consume inspiring content change environments try new techniques lower self-imposed pressure and remember blocks are temporary");
}
else if (message.includes("what is substance intoxication")) {
    speak("Substance intoxication involves reversible substance-specific symptoms like impaired judgment mood changes and physical signs due to recent ingestion");
}
else if (message.includes("how to manage technology addiction")) {
    speak("Set usage limits use apps to track time create tech-free zones find offline hobbies and address underlying needs the technology fulfills");
}
else if (message.includes("what is substance withdrawal")) {
    speak("Substance withdrawal involves problematic behavioral and physical changes when reducing or stopping prolonged heavy substance use");
}
else if (message.includes("how to develop patience")) {
    speak("Practice mindfulness reframe waiting as opportunity start small with brief delays focus on what you can control and recognize impatience signals");
}
else if (message.includes("what is gambling disorder")) {
    speak("Gambling disorder involves persistent problematic gambling behavior leading to distress or impairment like chasing losses lying about gambling or losing relationships");
}
else if (message.includes("how to handle creative criticism")) {
    speak("Separate yourself from the work listen for useful feedback ask clarifying questions thank the critic and decide which suggestions to implement");
}
else if (message.includes("what is internet gaming disorder")) {
    speak("Internet gaming disorder involves problematic gaming behavior leading to impairment including withdrawal symptoms loss of interest in other activities and continuation despite problems");
}
else if (message.includes("how to manage perfectionism at work")) {
    speak("Set realistic standards focus on progress not perfection delegate when possible challenge all-or-nothing thinking and schedule time limits for tasks");
}
else if (message.includes("what is caffeine intoxication")) {
    speak("Caffeine intoxication involves restlessness insomnia flushed face diuresis gastrointestinal disturbance and other symptoms from recent caffeine consumption");
}
else if (message.includes("how to develop active listening skills")) {
    speak("Focus fully on speaker avoid interrupting reflect back what you hear ask open-ended questions and observe nonverbal cues");
}
else if (message.includes("what is tobacco withdrawal")) {
    speak("Tobacco withdrawal involves irritability anxiety difficulty concentrating increased appetite restlessness and other symptoms after stopping nicotine use");
}
else if (message.includes("how to handle creative differences")) {
    speak("Focus on shared goals listen actively find compromise solutions separate ideas from egos and remember diverse perspectives strengthen outcomes");
}
else if (message.includes("what is alcohol use disorder")) {
    speak("Alcohol use disorder involves impaired control over drinking continued use despite problems and needing more alcohol for same effect among other symptoms");
}
else if (message.includes("how to manage imposter syndrome at work")) {
    speak("Document accomplishments recognize expertise develops gradually reframe thoughts to acknowledge your role and remember most people feel this sometimes");
}
else if (message.includes("what is cannabis use disorder")) {
    speak("Cannabis use disorder involves problematic use leading to impairment like failing responsibilities relationship problems or use in risky situations");
}
else if (message.includes("how to develop conflict resolution skills")) {
    speak("Stay calm identify core issues listen actively brainstorm solutions together focus on interests not positions and agree on actionable steps");
}
else if (message.includes("what is phencyclidine use disorder")) {
    speak("PCP use disorder involves problematic phencyclidine use leading to impairment including dangerous behavior psychological problems and failure to meet obligations");
}
else if (message.includes("how to handle creative rejection")) {
    speak("Separate yourself from the work learn from feedback if offered remember taste is subjective take time to process and return to creating when ready");
}
else if (message.includes("what is hallucinogen persisting perception disorder")) {
    speak("HPPD involves reexperiencing hallucinogen-like symptoms like geometric hallucinations after stopping the drug causing distress or impairment");
}
else if (message.includes("how to manage negative feedback")) {
    speak("Pause before reacting look for useful insights separate constructive from destructive criticism make an improvement plan and remember growth comes from challenge");
}
else if (message.includes("what is inhalant use disorder")) {
    speak("Inhalant use disorder involves problematic use of volatile hydrocarbons leading to impairment like risky use failure to meet obligations or continued use despite problems");
}
else if (message.includes("how to develop public speaking confidence")) {
    speak("Prepare thoroughly practice repeatedly visualize success focus on breathing techniques start with small audiences and remember nervousness isn't visible");
}
else if (message.includes("what is opioid use disorder")) {
    speak("Opioid use disorder involves problematic opioid use leading to impairment like craving failure to cut down use in hazardous situations or tolerance development");
}
else if (message.includes("how to handle creative burnout")) {
    speak("Take scheduled breaks engage in other activities lower expectations temporarily revisit what inspired you initially and consider collaborating with others");
}
else if (message.includes("what is sedative hypnotic or anxiolytic use disorder")) {
    speak("This involves problematic use of these substances leading to impairment like risky use failure to meet obligations or continued use despite problems");
}
else if (message.includes("how to manage presentation nerves")) {
    speak("Prepare thoroughly practice multiple times arrive early to settle in focus on audience needs rather than yourself and remember some nervousness energizes performance");
}
else if (message.includes("what is stimulant use disorder")) {
    speak("Stimulant use disorder involves problematic amphetamine-type substance or cocaine use leading to impairment like hazardous use or failure to meet obligations");
}
else if (message.includes("how to develop time management skills")) {
    speak("Prioritize tasks use planning tools set realistic goals minimize distractions delegate when possible and schedule breaks to maintain focus");
}
else if (message.includes("what is tobacco use disorder")) {
    speak("Tobacco use disorder involves problematic tobacco use leading to impairment like failure to cut down use despite health problems or time spent obtaining tobacco");
}
else if (message.includes("how to handle stage fright")) {
    speak("Prepare thoroughly practice under simulated conditions focus on your message not yourself use deep breathing and reframe nerves as excitement energy");
}
else if (message.includes("what is other hallucinogen use disorder")) {
    speak("This involves problematic hallucinogen use leading to impairment like failure to meet obligations persistent desire to cut down or use in hazardous situations");
}
else if (message.includes("how to manage meeting anxiety")) {
    speak("Prepare talking points arrive early have water handy take notes to stay focused remember others feel nervous too and contribute early to feel engaged");
}
else if (message.includes("what is other substance use disorder")) {
    speak("This category covers problematic use of substances not listed elsewhere leading to impairment like anabolic steroids nitrites or nitrous oxide");
}
else if (message.includes("how to develop leadership skills")) {
    speak("Practice clear communication lead by example seek feedback continuously learn empower team members and develop emotional intelligence");
}
else if (message.includes("what is nonsuicidal self injury")) {
    speak("NSSI involves deliberate self-harm like cutting or burning without suicidal intent often to relieve distress express self-punishment or feel something");
}
else if (message.includes("how to handle networking anxiety")) {
    speak("Prepare conversation starters arrive early set reasonable goals focus on listening more than talking follow up with contacts and remember most people feel awkward");
}
else if (message.includes("what is factitious disorder")) {
    speak("Factitious disorder involves falsifying physical or psychological symptoms or inducing injury/disease to assume the sick role without obvious external rewards");
}
else if (message.includes("how to manage interview stress")) {
    speak("Research the company thoroughly practice responses prepare questions to ask dress comfortably arrive early and remember interviews go both ways");
}
else if (message.includes("what is other specified mental disorder")) {
    speak("This category includes significant mental distress that doesn't meet full criteria for specific disorders but still causes impairment and needs attention");
}
else if (message.includes("how to develop negotiation skills")) {
    speak("Prepare thoroughly identify mutual interests listen actively communicate clearly remain flexible focus on win-win solutions and maintain professionalism");
}
else if (message.includes("what is unspecified mental disorder")) {
    speak("This category includes significant mental distress causing impairment when insufficient information exists for specific diagnosis but treatment is needed");
}
else if (message.includes("how to handle salary negotiation")) {
    speak("Research market rates consider total compensation package practice your pitch focus on value you provide remain professional and be prepared to compromise");
}
else if (message.includes("what is medication induced movement disorder")) {
    speak("These are medication side effects like parkinsonism acute dystonia akathisia or tardive dyskinesia that emerge during treatment and cause distress");
}
else if (message.includes("how to manage team conflict")) {
    speak("Address issues early focus on behaviors not personalities find common ground encourage open communication consider mediation and establish conflict norms");
}
else if (message.includes("what is other adverse effect of medication")) {
    speak("This category covers significant medication side effects not classified elsewhere that warrant clinical attention like severe dry mouth or sedation");
}
else if (message.includes("how to develop emotional intelligence")) {
    speak("Practice self-awareness manage emotions effectively develop empathy improve communication skills and build strong relationships through understanding");
}
else if (message.includes("what is relationship distress with spouse or partner")) {
    speak("This category covers significant distress related to intimate partner relationship quality that affects mental health and warrants clinical attention");
}
else if (message.includes("how to handle difficult conversations")) {
    speak("Prepare key points choose appropriate time/place listen actively stay calm focus on issues not personalities and work toward mutual understanding");
}
else if (message.includes("what is parent child relational problem")) {
    speak("This involves significant problems in parent-child interactions like communication issues excessive conflict or overprotection causing distress or impairment");
}
else if (message.includes("how to manage up effectively")) {
    speak("Understand your manager's priorities communicate proactively offer solutions not just problems be concise demonstrate reliability and align with organizational goals");
}
else if (message.includes("what is sibling relational problem")) {
    speak("This involves significant distress from sibling interactions like rivalry conflict or estrangement that affects mental health and warrants attention");
}
else if (message.includes("how to develop strategic thinking")) {
    speak("Understand organizational goals analyze industry trends think long-term consider multiple perspectives anticipate challenges and align daily work with strategy");
}
else if (message.includes("what is upbringing away from parents")) {
    speak("This category covers psychological distress related to being raised apart from parents like in foster care or by relatives warranting clinical attention");
}
else if (message.includes("how to handle micromanagement")) {
    speak("Build trust through reliability communicate proactively provide detailed updates suggest check-in frequency compromises and demonstrate consistent competence");
}
else if (message.includes("what is identity problem")) {
    speak("This involves uncertainty about multiple life issues like goals values career path causing significant distress that may warrant clinical attention");
}
else if (message.includes("how to manage remote work challenges")) {
    speak("Maintain regular hours create dedicated workspace overcommunicate proactively use video when possible schedule virtual socializing and separate work/home life");
}
else if (message.includes("what is religious or spiritual problem")) {
    speak("This involves significant distress related to religious/spiritual beliefs like loss of faith or conflicts between beliefs and other life aspects");
}
else if (message.includes("how to develop critical thinking")) {
    speak("Question assumptions gather information systematically analyze biases consider multiple perspectives draw reasoned conclusions and remain open to new evidence");
}
else if (message.includes("what is acculturation problem")) {
    speak("This involves difficulty adjusting to different culture causing significant distress like language barriers discrimination or cultural value conflicts");
}
else if (message.includes("how to handle generational differences at work")) {
    speak("Focus on shared goals value diverse perspectives adapt communication styles create mentoring opportunities and find strengths in each generation's approach");
}
else if (message.includes("what is social exclusion or rejection")) {
    speak("This involves significant distress from being excluded from desired social relationships affecting mental health and potentially warranting clinical attention");
}
else if (message.includes("how to manage cross cultural teams")) {
    speak("Learn cultural norms promote inclusion clarify expectations explicitly encourage perspective sharing bridge communication gaps and celebrate diversity");
}
else if (message.includes("what is target of perceived adverse discrimination or persecution")) {
    speak("This involves significant distress from real or perceived discrimination affecting mental health and potentially warranting clinical attention");
}
else if (message.includes("how to develop problem solving skills")) {
    speak("Define problems clearly gather information generate multiple solutions evaluate options implement chosen solution and assess results for improvement");
}
else if (message.includes("what is phase of life problem")) {
    speak("This involves difficulty adjusting to life transition like retirement empty nest or career change causing distress that may warrant clinical attention");
}
else if (message.includes("how to handle organizational change")) {
    speak("Focus on what you can control communicate concerns constructively stay flexible update skills as needed maintain professional network and practice self-care");
}
else if (message.includes("what is adult antisocial behavior")) {
    speak("This involves illegal aggressive or deceitful behavior not diagnosed as conduct disorder or antisocial personality disorder but causing problems");
}
else if (message.includes("how to manage stress during mergers")) {
    speak("Seek clear information focus on controlling controllables network across new organization update your resume as precaution and maintain work-life balance");
}
else if (message.includes("what is child or adolescent antisocial behavior")) {
    speak("This involves problematic behaviors like aggression destruction deceitfulness or rule violation not diagnosed as conduct disorder but causing problems");
}
else if (message.includes("how to develop adaptability skills")) {
    speak("Embrace learning mindset stay curious build diverse skills practice flexibility in small ways maintain positive attitude during change and reflect on transitions");
}
else if (message.includes("what is occupational problem")) {
    speak("This involves significant work-related distress like job dissatisfaction interpersonal conflicts or work-life imbalance warranting clinical attention");
}
else if (message.includes("how to handle job insecurity")) {
    speak("Update skills and resume network proactively reduce expenses if needed explore side opportunities maintain strong performance and focus on controllables");
}
else if (message.includes("what is housing problem")) {
    speak("This involves significant distress related to housing like homelessness unsafe environment or inability to afford housing warranting clinical attention");
}
else if (message.includes("how to manage career plateau")) {
    speak("Seek stretch assignments update skills mentor others explore lateral moves reconsider success metrics and find meaning outside work if needed");
}
else if (message.includes("what is economic problem")) {
    speak("This involves significant distress from financial circumstances like poverty extreme debt or unemployment affecting mental health and wellbeing");
}
else if (message.includes("how to develop career resilience")) {
    speak("Build transferable skills maintain professional network stay updated on industry trends develop side interests and view setbacks as temporary");
}
else if (message.includes("what is problem related to access to medical care")) {
    speak("This involves significant distress from inability to obtain adequate medical care affecting mental health and potentially warranting clinical attention");
}
else if (message.includes("how to handle age discrimination concerns")) {
    speak("Highlight relevant experience stay updated on skills focus on value you bring document concerns formally if needed and know your legal rights");
}
else if (message.includes("what is nonadherence to medical treatment")) {
    speak("This involves not following prescribed medical treatment causing health risks often due to cost side effects distrust or cultural factors");
}
else if (message.includes("how to manage stress during layoffs")) {
    speak("Control what you can update materials network proactively practice self-care avoid rumor mills and remember layoffs aren't personal failure");
}
else if (message.includes("what is malingering")) {
    speak("Malingering involves intentionally feigning physical or psychological symptoms for external incentives like financial compensation or avoiding work");
}
else if (message.includes("how to develop executive presence")) {
    speak("Communicate clearly and concisely demonstrate confidence stay composed under pressure think strategically and build authentic leadership style");
}
else if (message.includes("what is adult abuse or neglect")) {
    speak("This involves significant distress from being abused or neglected as adult warranting clinical attention and potentially legal intervention");
}
else if (message.includes("how to handle workplace bullying")) {
    speak("Document incidents clearly seek HR support if available build ally network know company policies consider mediation and prioritize your mental health");
}
else if (message.includes("what is child abuse or neglect")) {
    speak("This involves significant distress from childhood abuse/neglect affecting mental health warranting clinical attention and possibly legal reporting");
}
else if (message.includes("how to manage difficult boss")) {
    speak("Understand their priorities adapt communication style document interactions seek mentors build peer support and know when to escalate serious issues");
}
else if (message.includes("what is educational problem")) {
    speak("This involves significant distress related to academic difficulties like learning problems conflicts with teachers or school adjustment issues");
}
else if (message.includes("how to develop mentoring relationships")) {
    speak("Identify potential mentors approach respectfully clarify goals be receptive to feedback show appreciation and eventually pay forward by mentoring others");
}
else if (message.includes("what is counseling or medical advice")) {
    speak("This involves seeking professional help for psychological or medical issues beyond what virtual assistance can appropriately provide");
}
else if (message.includes("how to handle ethical dilemmas at work")) {
    speak("Consult company policies seek trusted advice document concerns consider whistleblower protections if needed and prioritize integrity");
}
else if (message.includes("what is personal history of abuse")) {
    speak("This involves past physical sexual or emotional abuse that may affect current mental health and warrant therapeutic processing");
}
else if (message.includes("how to manage work travel stress")) {
    speak("Pack efficiently maintain routines when possible stay hydrated schedule recovery time after trips use technology to stay connected and prioritize sleep");
}
else if (message.includes("what is personal history of neglect")) {
    speak("This involves past physical or emotional neglect that may affect current mental health and relationships warranting therapeutic attention");
}
else if (message.includes("how to develop work life integration")) {
    speak("Set flexible boundaries blend personal/professional priorities based on values communicate needs clearly and regularly reassess balance");
}
else if (message.includes("what is personal history of self harm")) {
    speak("This involves past nonsuicidal self-injury or suicide attempts that may indicate ongoing vulnerability and need for therapeutic support");
}
else if (message.includes("how to handle return to office transition")) {
    speak("Gradually adjust sleep schedule prepare workspace needs communicate concerns proactively rebuild in-person connections and maintain some remote benefits");
}
else if (message.includes("i feel like my thoughts are too loud")) {
    speak("racing thoughts can be a sign of anxiety or stress gentle breathing and calming activities may help");
}
else if (message.includes("i feel nervous without reason")) {
    speak("feeling nervous without cause can come from anxiety grounding exercises can help calm your mind");
}
else if (message.includes("i stay awake thinking all night")) {
    speak("overthinking at night can be caused by stress or anxiety try writing thoughts down or relaxing your body before bed");
}
else if (message.includes("i feel like nobody understands me")) {
    speak("feeling misunderstood can be lonely but sharing your feelings with a kind listener can bring comfort");
}
else if (message.includes("i feel numb and tired")) {
    speak("emotional numbness and tiredness may be signs of burnout or depression small steps toward self care can help");
}
else if (message.includes("i find it hard to trust people")) {
    speak("trust issues often come from past hurt healing and healthy connections can rebuild trust");
}
else if (message.includes("i feel like nothing matters")) {
    speak("this feeling can happen in depression you matter and support is available to help you feel hope again");
}
else if (message.includes("i feel like giving up on everything")) {
    speak("these feelings can be heavy to carry talking to someone can ease the pain and offer a new view");
}
else if (message.includes("i feel afraid all the time")) {
    speak("constant fear may be linked to trauma or anxiety calming techniques and support can help bring peace");
}
else if (message.includes("i do not want to see anyone")) {
    speak("isolation can be a response to pain or stress gently reaching out to someone can bring light back");
}
else if (message.includes("i feel lost and confused")) {
    speak("feeling lost can come from stress or change reflecting and speaking to someone may help you find direction");
}
else if (message.includes("i avoid crowded places")) {
    speak("avoiding crowds can be linked to anxiety or past trauma calming practices and gradual exposure can help");
}
else if (message.includes("i feel tense all day")) {
    speak("constant tension may be a sign of anxiety try light stretching or slow breathing to relax your muscles");
}
else if (message.includes("i get angry without reason")) {
    speak("unexplained anger might be hiding stress or emotional pain talking can help you find the root cause");
}
else if (message.includes("i feel stuck in life")) {
    speak("feeling stuck can be frustrating setting small goals and seeking support can help move you forward");
}
else if (message.includes("i feel ashamed of myself")) {
    speak("shame can grow from inner pain you deserve kindness and healing through support and self compassion");
}
else if (message.includes("i keep replaying bad memories")) {
    speak("replaying painful memories is common in trauma grounding and therapy can help break the cycle");
}
else if (message.includes("i feel disconnected from my body")) {
    speak("disconnection may be a trauma response gentle movement and mindfulness can help you reconnect");
}
else if (message.includes("i always expect the worst")) {
    speak("expecting the worst can come from anxiety learning to challenge thoughts gently can bring hope");
}
else if (message.includes("i feel like a burden to others")) {
    speak("you are not a burden your feelings matter and you deserve to be supported and cared for");
}
else if (message.includes("why do i get flashbacks")) {
    speak("flashbacks can be a sign of ptsd your brain might still be processing a painful experience consider speaking with a mental health expert");
}
else if (message.includes("i cannot forget a bad event")) {
    speak("it is hard to move on from painful memories but you can heal with time support and talking to a therapist");
}
else if (message.includes("i feel scared at night")) {
    speak("feeling scared at night could be linked to anxiety ptsd or stress try to stay calm breathe deeply and seek support if it continues");
}
else if (message.includes("how do i deal with panic attack")) {
    speak("during a panic attack try to take slow deep breaths ground yourself by touching something and remind yourself that it will pass");
}
else if (message.includes("why do i feel numb all the time")) {
    speak("feeling numb emotionally can be a sign of depression or trauma it helps to talk to a mental health professional");
}
else if (message.includes("why do i feel nothing makes me happy")) {
    speak("loss of interest in things that once brought joy is a common sign of depression consider seeking help from a therapist");
}
else if (message.includes("why do i get angry so quickly")) {
    speak("frequent anger outbursts can be due to stress unresolved trauma or emotional imbalance therapy can help manage this");
}
else if (message.includes("why do i feel like everyone is against me")) {
    speak("feeling like everyone is against you may point to anxiety or trust issues it is important to talk to someone about it");
}
else if (message.includes("why do i avoid social situations")) {
    speak("avoiding social situations could be linked to social anxiety it helps to gradually face fears and seek guidance from a therapist");
}
else if (message.includes("why do i feel jumpy and alert all the time")) {
    speak("being constantly alert or jumpy may indicate ptsd or anxiety it is best to speak with a mental health expert");
}
else if (message.includes("why do i cry without reason")) {
    speak("crying without a clear reason might be a sign of emotional distress or depression therapy can help explore these feelings");
}
else if (message.includes("why do i feel disconnected from myself")) {
    speak("feeling disconnected from yourself is called dissociation it can happen due to stress or trauma professional support can help");
}
else if (message.includes("why do i keep having nightmares")) {
    speak("frequent nightmares may be linked to ptsd stress or anxiety relaxation techniques or therapy might be helpful");
}
else if (message.includes("why do i struggle to trust people")) {
    speak("difficulty trusting others may stem from past experiences or trauma speaking to a therapist can help rebuild trust");
}
else if (message.includes("why do i have low self esteem")) {
    speak("low self esteem often develops from negative experiences or self talk therapy can help you rebuild confidence");
}
else if (message.includes("why do i avoid talking about my feelings")) {
    speak("avoiding emotional conversations might be due to fear of judgment or past trauma expressing feelings with a therapist can help");
}
else if (message.includes("why do i feel overwhelmed by small tasks")) {
    speak("feeling overwhelmed easily can be a symptom of depression or anxiety taking breaks and seeking help can make things easier");
}
else if (message.includes("why do i replay conversations in my head")) {
    speak("replaying conversations often points to anxiety or overthinking learning calming techniques can help ease the mind");
}
else if (message.includes("why do i feel like something bad is going to happen")) {
    speak("persistent fear of bad events may be linked to anxiety speaking to a mental health expert can provide clarity");
}
else if (message.includes("why do i find it hard to focus")) {
    speak("trouble focusing may be caused by stress anxiety or other mental health issues talking to a professional can help identify the cause");
}
else if (message.includes("i feel nervous while talking to people")) {
    speak("feeling nervous in social settings is common you can try practicing small conversations and slowly build your confidence");
}
else if (message.includes("i do not want to leave my room")) {
    speak("staying in your room for long can be a sign of depression try to take small steps to go outside or talk to someone");
}
else if (message.includes("why do i feel guilty all the time")) {
    speak("constant guilt may be linked to depression or anxiety talking to a mental health expert can help you understand it better");
}
else if (message.includes("how do i handle stress at work")) {
    speak("managing stress at work includes taking short breaks setting small goals and talking about your workload if needed");
}
else if (message.includes("why do i feel like i am not good enough")) {
    speak("feeling not good enough may come from low self esteem it is important to remind yourself of your strengths and talk to a professional");
}
else if (message.includes("i feel lonely even with friends")) {
    speak("feeling lonely around others may mean you need deeper connections try talking honestly with someone you trust");
}
else if (message.includes("i keep having bad dreams")) {
    speak("frequent bad dreams may come from stress anxiety or past trauma consider relaxation techniques before sleep or seeking help");
}
else if (message.includes("why do i get angry so easily")) {
    speak("getting angry easily may be linked to stress or emotional pain try deep breathing or writing down your feelings");
}
else if (message.includes("how do i know if i have anxiety")) {
    speak("anxiety often causes restlessness racing thoughts or rapid heartbeat if you feel this often it is best to talk to a therapist");
}
else if (message.includes("i feel scared when i hear loud noises")) {
    speak("sensitivity to loud sounds may be a symptom of ptsd or anxiety try calming techniques and seek support if it affects daily life");
}
else if (message.includes("why do i not enjoy anything anymore")) {
    speak("losing interest in things you once liked is a sign of depression please talk to someone and take care of your mental health");
}
else if (message.includes("how do i stop thinking negative thoughts")) {
    speak("to reduce negative thoughts try to focus on the present write positive things and speak to someone you trust or a therapist");
}
else if (message.includes("i feel scared when i wake up")) {
    speak("waking up with fear may be linked to anxiety or trauma talking to someone can help you find calm and better sleep");
}
else if (message.includes("i feel like nobody understands me")) {
    speak("feeling misunderstood can be painful but there are people who care try talking to a counselor or support group");
}
else if (message.includes("i avoid talking about my past")) {
    speak("avoiding your past may mean you are protecting yourself from pain but healing starts when you open up with someone safe");
}
else if (message.includes("why do i cry without reason")) {
    speak("crying without clear reason may be caused by hidden stress or depression talking to a therapist can help you explore this");
}
else if (message.includes("i cannot stay focused on anything")) {
    speak("trouble focusing can be a symptom of anxiety depression or stress try taking breaks and seeking mental health advice");
}
else if (message.includes("i feel pressure to be perfect")) {
    speak("perfection pressure can hurt your well being try to be kind to yourself and accept that mistakes help you grow");
}
else if (message.includes("why do i feel unsafe even at home")) {
    speak("feeling unsafe at home may come from past trauma or anxiety it is important to talk to someone and find peace");
}
else if (message.includes("i get upset over small things")) {
    speak("getting upset easily may be caused by built up emotions or stress learning to express feelings calmly can help");
}
else if (message.includes("i feel nervous while talking to people")) {
    speak("feeling nervous in social settings is common you can try practicing small conversations and slowly build your confidence");
}
else if (message.includes("i do not want to leave my room")) {
    speak("staying in your room for long can be a sign of depression try to take small steps to go outside or talk to someone");
}
else if (message.includes("why do i feel guilty all the time")) {
    speak("constant guilt may be linked to depression or anxiety talking to a mental health expert can help you understand it better");
}
else if (message.includes("how do i handle stress at work")) {
    speak("managing stress at work includes taking short breaks setting small goals and talking about your workload if needed");
}
else if (message.includes("why do i feel like i am not good enough")) {
    speak("feeling not good enough may come from low self esteem it is important to remind yourself of your strengths and talk to a professional");
}
else if (message.includes("i feel lonely even with friends")) {
    speak("feeling lonely around others may mean you need deeper connections try talking honestly with someone you trust");
}
else if (message.includes("i keep having bad dreams")) {
    speak("frequent bad dreams may come from stress anxiety or past trauma consider relaxation techniques before sleep or seeking help");
}
else if (message.includes("why do i get angry so easily")) {
    speak("getting angry easily may be linked to stress or emotional pain try deep breathing or writing down your feelings");
}
else if (message.includes("how do i know if i have anxiety")) {
    speak("anxiety often causes restlessness racing thoughts or rapid heartbeat if you feel this often it is best to talk to a therapist");
}
else if (message.includes("i feel scared when i hear loud noises")) {
    speak("sensitivity to loud sounds may be a symptom of ptsd or anxiety try calming techniques and seek support if it affects daily life");
}
else if (message.includes("why do i not enjoy anything anymore")) {
    speak("losing interest in things you once liked is a sign of depression please talk to someone and take care of your mental health");
}
else if (message.includes("how do i stop thinking negative thoughts")) {
    speak("to reduce negative thoughts try to focus on the present write positive things and speak to someone you trust or a therapist");
}
else if (message.includes("i feel scared when i wake up")) {
    speak("waking up with fear may be linked to anxiety or trauma talking to someone can help you find calm and better sleep");
}
else if (message.includes("i feel like nobody understands me")) {
    speak("feeling misunderstood can be painful but there are people who care try talking to a counselor or support group");
}
else if (message.includes("i avoid talking about my past")) {
    speak("avoiding your past may mean you are protecting yourself from pain but healing starts when you open up with someone safe");
}
else if (message.includes("why do i cry without reason")) {
    speak("crying without clear reason may be caused by hidden stress or depression talking to a therapist can help you explore this");
}
else if (message.includes("i cannot stay focused on anything")) {
    speak("trouble focusing can be a symptom of anxiety depression or stress try taking breaks and seeking mental health advice");
}
else if (message.includes("i feel pressure to be perfect")) {
    speak("perfection pressure can hurt your well being try to be kind to yourself and accept that mistakes help you grow");
}
else if (message.includes("why do i feel unsafe even at home")) {
    speak("feeling unsafe at home may come from past trauma or anxiety it is important to talk to someone and find peace");
}
else if (message.includes("i get upset over small things")) {
    speak("getting upset easily may be caused by built up emotions or stress learning to express feelings calmly can help");
}
else if (message.includes("why do i feel tense all day")) {
    speak("feeling tense all day could mean chronic stress or anxiety try relaxing your body and taking mindful breaks");
}
else if (message.includes("i think too much about my mistakes")) {
    speak("thinking a lot about your mistakes can lead to guilt or low mood it is helpful to forgive yourself and learn from them");
}
else if (message.includes("i feel nothing at all")) {
    speak("feeling numb can be a sign of depression or emotional burnout please talk to a mental health professional");
}
else if (message.includes("i am always tired even after sleeping")) {
    speak("feeling tired all the time may be caused by mental stress depression or sleep issues try seeking help to understand why");
}
else if (message.includes("i get startled very easily")) {
    speak("getting startled often may be a sign of ptsd or high anxiety try grounding techniques and seek support if needed");
}
else if (message.includes("why do i push people away")) {
    speak("pushing others away can come from fear of getting hurt or past pain opening up slowly can help build trust again");
}
else if (message.includes("i feel nervous while talking to people")) {
    speak("feeling nervous in social settings is common you can try practicing small conversations and slowly build your confidence");
}
else if (message.includes("i do not want to leave my room")) {
    speak("staying in your room for long can be a sign of depression try to take small steps to go outside or talk to someone");
}
else if (message.includes("why do i feel guilty all the time")) {
    speak("constant guilt may be linked to depression or anxiety talking to a mental health expert can help you understand it better");
}
else if (message.includes("how do i handle stress at work")) {
    speak("managing stress at work includes taking short breaks setting small goals and talking about your workload if needed");
}
else if (message.includes("why do i feel like i am not good enough")) {
    speak("feeling not good enough may come from low self esteem it is important to remind yourself of your strengths and talk to a professional");
}
else if (message.includes("i feel lonely even with friends")) {
    speak("feeling lonely around others may mean you need deeper connections try talking honestly with someone you trust");
}
else if (message.includes("i keep having bad dreams")) {
    speak("frequent bad dreams may come from stress anxiety or past trauma consider relaxation techniques before sleep or seeking help");
}
else if (message.includes("why do i get angry so easily")) {
    speak("getting angry easily may be linked to stress or emotional pain try deep breathing or writing down your feelings");
}
else if (message.includes("how do i know if i have anxiety")) {
    speak("anxiety often causes restlessness racing thoughts or rapid heartbeat if you feel this often it is best to talk to a therapist");
}
else if (message.includes("i feel scared when i hear loud noises")) {
    speak("sensitivity to loud sounds may be a symptom of ptsd or anxiety try calming techniques and seek support if it affects daily life");
}
else if (message.includes("why do i not enjoy anything anymore")) {
    speak("losing interest in things you once liked is a sign of depression please talk to someone and take care of your mental health");
}
else if (message.includes("how do i stop thinking negative thoughts")) {
    speak("to reduce negative thoughts try to focus on the present write positive things and speak to someone you trust or a therapist");
}
else if (message.includes("i feel scared when i wake up")) {
    speak("waking up with fear may be linked to anxiety or trauma talking to someone can help you find calm and better sleep");
}
else if (message.includes("i feel like nobody understands me")) {
    speak("feeling misunderstood can be painful but there are people who care try talking to a counselor or support group");
}
else if (message.includes("i avoid talking about my past")) {
    speak("avoiding your past may mean you are protecting yourself from pain but healing starts when you open up with someone safe");
}
else if (message.includes("why do i cry without reason")) {
    speak("crying without clear reason may be caused by hidden stress or depression talking to a therapist can help you explore this");
}
else if (message.includes("i cannot stay focused on anything")) {
    speak("trouble focusing can be a symptom of anxiety depression or stress try taking breaks and seeking mental health advice");
}
else if (message.includes("i feel pressure to be perfect")) {
    speak("perfection pressure can hurt your well being try to be kind to yourself and accept that mistakes help you grow");
}
else if (message.includes("why do i feel unsafe even at home")) {
    speak("feeling unsafe at home may come from past trauma or anxiety it is important to talk to someone and find peace");
}
else if (message.includes("i get upset over small things")) {
    speak("getting upset easily may be caused by built up emotions or stress learning to express feelings calmly can help");
}
else if (message.includes("why do i feel tense all day")) {
    speak("feeling tense all day could mean chronic stress or anxiety try relaxing your body and taking mindful breaks");
}
else if (message.includes("i think too much about my mistakes")) {
    speak("thinking a lot about your mistakes can lead to guilt or low mood it is helpful to forgive yourself and learn from them");
}
else if (message.includes("i feel nothing at all")) {
    speak("feeling numb can be a sign of depression or emotional burnout please talk to a mental health professional");
}
else if (message.includes("i am always tired even after sleeping")) {
    speak("feeling tired all the time may be caused by mental stress depression or sleep issues try seeking help to understand why");
}
else if (message.includes("i get startled very easily")) {
    speak("getting startled often may be a sign of ptsd or high anxiety try grounding techniques and seek support if needed");
}
else if (message.includes("why do i push people away")) {
    speak("pushing others away can come from fear of getting hurt or past pain opening up slowly can help build trust again");
}
else if (message.includes("why do i feel trapped in my thoughts")) {
    speak("feeling stuck in your thoughts can be linked to anxiety or obsessive thinking try grounding exercises and talk to a therapist");
}
else if (message.includes("i get headaches when i am stressed")) {
    speak("stress can cause physical pain like headaches consider relaxation techniques and managing your daily stress levels");
}
else if (message.includes("why do i feel like something bad will happen")) {
    speak("this feeling may come from anxiety or past trauma deep breathing and talking about your fear can help reduce it");
}

else if (message.includes("i feel shaky when nervous")) {
    speak("shaking during anxiety is your body's natural response try slow breathing and grounding techniques to calm your nerves");
}
else if (message.includes("i cannot stop biting my nails")) {
    speak("nail biting can be a stress habit try keeping your hands busy or using fidget toys to break the cycle");
}
else if (message.includes("why do i feel sick when anxious")) {
    speak("anxiety can cause stomach issues as your body reacts to stress gentle breathing and hydration may help");
}
else if (message.includes("i sweat too much when nervous")) {
    speak("excessive sweating is common with anxiety try wearing breathable fabrics and carrying a small towel when needed");
}
else if (message.includes("my hands get cold when stressed")) {
    speak("stress affects blood circulation causing cold hands try warming them slowly and practicing relaxation techniques");
}
else if (message.includes("i grind my teeth at night")) {
    speak("teeth grinding often relates to stress a mouth guard can protect your teeth while you address the underlying causes");
}
else if (message.includes("why does my jaw hurt when anxious")) {
    speak("anxiety causes muscle tension including in your jaw gentle massage and conscious relaxation can help");
}
else if (message.includes("i get hives when stressed")) {
    speak("stress can trigger skin reactions like hives cool compresses and antihistamines may help while addressing the stress");
}
else if (message.includes("my vision blurs when panicked")) {
    speak("panic can temporarily affect vision focus on slow breathing until your body calms and vision clears");
}
else if (message.includes("i feel tingling in my hands when scared")) {
    speak("tingling is a common anxiety symptom from rapid breathing try controlled breathing to restore balance");
}
else if (message.includes("why do i forget words when nervous")) {
    speak("stress affects memory retrieval be patient with yourself the words will return as you calm down");
}
else if (message.includes("i stutter more when anxious")) {
    speak("anxiety can worsen speech difficulties speaking slowly and pausing when needed can help you regain control");
}
else if (message.includes("my face gets red when embarrassed")) {
    speak("blushing is a natural stress response remember most people notice it less than you think they do");
}
else if (message.includes("i feel dizzy during panic attacks")) {
    speak("dizziness is common in panic focus on a fixed spot and breathe slowly until it passes");
}
else if (message.includes("why do my legs shake when scared")) {
    speak("shaking legs are your body preparing to run gentle movement or sitting can help release the tension");
}
else if (message.includes("i get chest tightness when stressed")) {
    speak("stress tenses chest muscles slow breathing and stretching can help but see a doctor if it persists");
}
else if (message.includes("my scalp tingles when anxious")) {
    speak("scalp tingles are a stress response gentle head massage or washing hair with cool water may help");
}
else if (message.includes("i feel like choking when nervous")) {
    speak("this throat tightness is anxiety try sipping water and focusing on slow exhales to relax");
}
else if (message.includes("why do my ears ring when stressed")) {
    speak("stress can worsen tinnitus background noise and relaxation may help reduce the ringing sensation");
}
else if (message.includes("i get nosebleeds when anxious")) {
    speak("stress can contribute to nosebleeds stay calm lean forward slightly and pinch your nose until it stops");
}
else if (message.includes("my skin itches when i worry")) {
    speak("anxiety can cause phantom itches moisturize and try distraction until the feeling passes");
}
else if (message.includes("i feel electric shocks in my body")) {
    speak("this is likely nerve hypersensitivity from stress gentle movement and relaxation can calm your system");
}
else if (message.includes("why do i yawn when anxious")) {
    speak("anxiety yawning is your body trying to get more oxygen focus on slow deep breaths instead");
}
else if (message.includes("i gag when extremely nervous")) {
    speak("this is your body's stress response sip cold water and focus on breathing through your nose");
}
else if (message.includes("my arms go numb when panicked")) {
    speak("panic can cause temporary numbness gentle movement and controlled breathing will help it pass");
}
else if (message.includes("i feel like i have a lump in my throat")) {
    speak("this globus sensation is common with stress swallowing slowly and staying hydrated can help");
}
else if (message.includes("why do my fingers lock up when stressed")) {
    speak("stress tenses muscles try gentle stretches and massage to relieve the stiffness");
}
else if (message.includes("i get hot flashes when anxious")) {
    speak("anxiety affects temperature regulation cool cloths and slow breathing can help you cool down");
}
else if (message.includes("my knees buckle when scared")) {
    speak("this is your body's fear response hold onto something stable and focus on slow steady breathing");
}
else if (message.includes("i feel like i cannot take a deep breath")) {
    speak("anxiety causes this feeling try breathing in through your nose for 4 counts then out for 6 counts");
}
else if (message.includes("why do i feel my pulse everywhere when nervous")) {
    speak("anxiety makes you more aware of your heartbeat this sensation will fade as you calm down");
}
else if (message.includes("i get sudden chills when stressed")) {
    speak("stress hormones can cause temperature swings a light blanket or warm drink may help stabilize you");
}
else if (message.includes("my tongue feels heavy when anxious")) {
    speak("anxiety tension affects oral muscles sip water and gently move your tongue to relax");
}
else if (message.includes("i feel like i am floating during panic")) {
    speak("this dissociation is a stress response grounding techniques like touching objects around you can help");
}
else if (message.includes("why do my eyelids twitch when stressed")) {
    speak("eye twitches are common with stress try warm compresses and reducing caffeine");
}
else if (message.includes("i get sudden sneezing when nervous")) {
    speak("stress can trigger odd reflexes like sneezing it should pass as you calm down");
}
else if (message.includes("my feet sweat excessively when anxious")) {
    speak("anxiety increases sweating wear breathable shoes and socks and practice relaxation techniques");
}
else if (message.includes("i feel like my skin is crawling")) {
    speak("this is a stress-related sensation distraction and gentle skin pressure may help it pass");
}
else if (message.includes("why do i cough when stressed")) {
    speak("anxiety can cause throat irritation sips of water and slow breathing can calm the reflex");
}
else if (message.includes("i get sudden hiccups when nervous")) {
    speak("stress hiccups usually pass quickly holding your breath briefly or drinking water may help");
}
else if (message.includes("my hair feels like it is standing up")) {
    speak("this is a stress response called piloerection gentle brushing or washing hair may help");
}
else if (message.includes("i feel like i am vibrating inside")) {
    speak("this internal tremor is anxiety your body will calm with relaxation and time");
}
else if (message.includes("why do my teeth chatter when scared")) {
    speak("this is your body's stress response sipping warm liquid or humming can help stop it");
}
else if (message.includes("i get sudden dry mouth when anxious")) {
    speak("anxiety reduces saliva sip water slowly or try sugar-free candy to stimulate moisture");
}
else if (message.includes("my nostrils flare when stressed")) {
    speak("this is an unconscious stress signal conscious slow breathing can help relax the muscles");
}
else if (message.includes("i feel like my head is too heavy")) {
    speak("stress causes muscle tension in the neck gentle stretches and massage may relieve this");
}
else if (message.includes("why do my cuticles hurt when nervous")) {
    speak("anxiety makes you notice small pains try hand lotion and distraction until it passes");
}
else if (message.includes("i get sudden shivers down my spine")) {
    speak("this is a stress reflex deep breathing and warm layers can help you feel more settled");
}
else if (message.includes("my palms get clammy when anxious")) {
    speak("sweaty palms are common with anxiety keep a small towel handy and practice grounding");
}
else if (message.includes("i feel like my bones ache when stressed")) {
    speak("stress tenses muscles creating this sensation warm baths and gentle movement may help");
}
else if (message.includes("why do my ears feel blocked when nervous")) {
    speak("anxiety can cause ear pressure yawning or swallowing gently may help equalize it");
}
else if (message.includes("i get sudden thirst during panic")) {
    speak("panic triggers this sensation small sips of water are better than large gulps");
}
else if (message.includes("my shoulders hike up when stressed")) {
    speak("notice this tension and consciously lower your shoulders gentle rolls can help relax");
}
else if (message.includes("i feel like my veins are pulsing")) {
    speak("anxiety makes you notice bodily sensations this awareness will fade as you calm");
}
else if (message.includes("why do my cuticles peel when anxious")) {
    speak("nervous picking is common try keeping hands busy with a stress ball or fidget toy");
}
else if (message.includes("i get sudden runny nose when stressed")) {
    speak("stress can trigger nasal reactions gentle blowing and cool compresses may help");
}
else if (message.includes("my ankles feel weak when scared")) {
    speak("this is your body's stress response sit down if needed and focus on steady breathing");
}
else if (message.includes("i feel like my ribs hurt when anxious")) {
    speak("anxiety causes shallow breathing that can ache try slow deep breaths to relieve this");
}
else if (message.includes("why do my elbows tingle when nervous")) {
    speak("stress affects nerves gentle movement and massage can help restore normal feeling");
}
else if (message.includes("i get sudden burping when anxious")) {
    speak("anxiety affects digestion small sips of water and slower eating can help reduce this");
}
else if (message.includes("my wrists feel weak when stressed")) {
    speak("stress tenses muscles creating this feeling gentle stretches can help restore strength");
}
else if (message.includes("i feel like my spine is too straight")) {
    speak("anxiety causes postural stiffness gentle movement and conscious relaxation can help");
}
else if (message.includes("why do my knees pop when nervous")) {
    speak("stress tenses muscles changing joint pressure this should normalize as you relax");
}
else if (message.includes("i get sudden metallic taste when panicked")) {
    speak("panic can cause odd tastes sip water and focus on breathing until it passes");
}
else if (message.includes("my hips feel locked when stressed")) {
    speak("stress stores tension in hips gentle circles and stretches can help release this");
}
else if (message.includes("i feel like my neck cannot support my head")) {
    speak("anxiety causes this sensation rest your head back gently and practice relaxation");
}
else if (message.includes("why do my fingernails hurt when anxious")) {
    speak("stress makes you notice small pains distraction and hand massage may help shift focus");
}
else if (message.includes("i get sudden sniffles when nervous")) {
    speak("anxiety can trigger nasal reactions this should pass as your body calms down");
}
else if (message.includes("my toes curl when scared")) {
    speak("this is a stress response conscious relaxation and gentle stretching can help");
}
else if (message.includes("i feel like my forehead is too tight")) {
    speak("stress tenses facial muscles gentle massage and warm compresses may help relax");
}
else if (message.includes("why do my cuticles bleed when stressed")) {
    speak("nervous picking is common keep nails trimmed and hands moisturized to prevent this");
}
else if (message.includes("i get sudden eye watering when anxious")) {
    speak("stress can trigger tearing this should stop as you practice calming techniques");
}
else if (message.includes("my calves cramp when nervous")) {
    speak("anxiety tenses muscles gentle stretching and hydration can help prevent cramps");
}
else if (message.includes("i feel like my chin trembles when scared")) {
    speak("this is a natural stress response gentle pressure on your chin may help steady it");
}
else if (message.includes("why do my knuckles ache when stressed")) {
    speak("stress causes muscle tension that can ache gentle hand exercises may help relieve");
}
else if (message.includes("i get sudden goosebumps when panicked")) {
    speak("this is your body's stress reaction it will fade as you practice calming down");
}
else if (message.includes("my thumbs twitch when anxious")) {
    speak("stress can cause small muscle twitches gentle pressure and relaxation can help");
}
else if (message.includes("i feel like my collarbones stick out")) {
    speak("anxiety makes you notice body sensations this awareness will pass as you calm");
}
else if (message.includes("why do my earlobes tingle when nervous")) {
    speak("stress affects nerves gentle massage can help restore normal sensation");
}
else if (message.includes("i get sudden jaw clicking when stressed")) {
    speak("anxiety tenses jaw muscles try gentle massage and avoiding gum chewing");
}
else if (message.includes("my pinky fingers lock when anxious")) {
    speak("stress causes muscle tension gentle stretches can help release this");
}
else if (message.includes("i feel like my nose itches inside")) {
    speak("anxiety can cause phantom itches distraction usually makes this pass");
}
else if (message.includes("why do my toenails hurt when stressed")) {
    speak("stress makes you notice small pains comfortable shoes and relaxation help");
}
else if (message.includes("i get sudden eyelid heaviness when nervous")) {
    speak("anxiety causes this sensation cool compresses may help refresh your eyes");
}
else if (message.includes("my index fingers tingle when scared")) {
    speak("stress affects circulation gentle movement can help restore normal feeling");
}
else if (message.includes("i feel like my ribs are too noticeable")) {
    speak("anxiety increases body awareness this focus will lessen as you calm down");
}
else if (message.includes("why do my heels ache when anxious")) {
    speak("stress tenses muscles including feet gentle massage and warm soaks may help");
}
else if (message.includes("i get sudden shoulder popping when stressed")) {
    speak("anxiety changes posture and muscle tension this should improve with relaxation");
}
else if (message.includes("my ring fingers feel stiff when nervous")) {
    speak("stress causes muscle tension gentle stretches and massage can help");
}
else if (message.includes("i feel like my eyebrows are too heavy")) {
    speak("this is stress-related tension gentle forehead massage may help relax");
}
else if (message.includes("why do my toenails look different when stressed")) {
    speak("stress affects nail growth this should normalize as you reduce anxiety");
}
else if (message.includes("i get sudden armpit sweating when anxious")) {
    speak("anxiety increases sweating breathable fabrics and relaxation help manage");
}
else if (message.includes("my middle fingers cramp when scared")) {
    speak("stress tenses muscles gentle stretches and conscious relaxation can help");
}
else if (message.includes("i feel like my nostrils flare too much")) {
    speak("this is likely just your awareness focus on slow breathing to calm down");
}
else if (message.includes("why do my cuticles grow fast when nervous")) {
    speak("stress may make you notice growth more keeping nails groomed can help");
}
else if (message.includes("i get sudden back cracking when stressed")) {
    speak("anxiety changes posture gentle movement and stretching can help");
}
else if (message.includes("my baby toes go numb when anxious")) {
    speak("stress affects circulation gentle wiggling and massage can help");
}
else if (message.includes("i feel like my eyelids are too dry")) {
    speak("anxiety reduces blinking artificial tears and conscious blinking help");
}
else if (message.includes("why do my nail beds hurt when stressed")) {
    speak("stress increases sensitivity gentle care and distraction may help");
}
else if (message.includes("i get sudden thigh trembling when nervous")) {
    speak("this is your body's stress response it will pass as you relax");
}
else if (message.includes("my thumbs feel weak when scared")) {
    speak("anxiety causes this sensation gentle exercises can restore strength");
}
else if (message.includes("i feel like my nose runs when anxious")) {
    speak("stress can trigger nasal reactions this should pass as you calm");
}
else if (message.includes("why do my toenails thicken when stressed")) {
    speak("stress affects nail growth but see a doctor if changes persist");
}
else if (message.includes("i get sudden foot arch pain when nervous")) {
    speak("anxiety tenses muscles gentle stretches and massage can help");
}
else if (message.includes("my pinky toes curl when anxious")) {
    speak("stress causes this response conscious relaxation can release it");
}
else if (message.includes("i feel like my ears get hot when stressed")) {
    speak("anxiety affects circulation cool cloths may help reduce warmth");
}
else if (message.includes("why do my fingernails bend when anxious")) {
    speak("stress may make you notice normal flexibility moisturizing helps");
}
else if (message.includes("i get sudden calf twitches when nervous")) {
    speak("anxiety causes muscle twitches gentle massage can calm these");
}
else if (message.includes("my big toes throb when scared")) {
    speak("stress affects circulation warm soaks and movement may help");
}
else if (message.includes("i feel like my nose looks bigger when anxious")) {
    speak("this is likely just increased awareness from stress it will pass");
}
else if (message.includes("why do my cuticles recede when stressed")) {
    speak("nervous picking may cause this keeping hands moisturized helps");
}
else if (message.includes("i get sudden wrist popping when nervous")) {
    speak("anxiety tenses muscles gentle circles can help release this");
}
else if (message.includes("my ankles crack when anxious")) {
    speak("stress changes movement patterns this should improve with calm");
}
else if (message.includes("i feel like my lips chap more when stressed")) {
    speak("anxiety may cause lip biting or neglect balm and hydration help");
}
else if (message.includes("why do my nail tips hurt when nervous")) {
    speak("stress increases sensitivity gentle care and relaxation help");
}
else if (message.includes("i get sudden knee clicking when scared")) {
    speak("anxiety affects posture and movement this should normalize");
}
else if (message.includes("my elbows get dry when stressed")) {
    speak("stress may affect skin moisturizing and hydration can help");
}
else if (message.includes("i feel like my nostrils are too small")) {
    speak("this is likely just anxiety focus on slow deep breathing");
}
else if (message.includes("why do my toenails yellow when anxious")) {
    speak("stress rarely causes this see a doctor if it persists");
}
else if (message.includes("i get sudden hip popping when nervous")) {
    speak("anxiety changes movement gentle stretching can help");
}
else if (message.includes("my shoulders crack when stressed")) {
    speak("stress tenses muscles gentle rolls may release this");
}
else if (message.includes("i feel like my ears are too sensitive")) {
    speak("anxiety heightens senses this should lessen as you calm");
}
else if (message.includes("why do my fingernails split when stressed")) {
    speak("stress may worsen nail health moisturizing and gentle care help");
}
else if (message.includes("i get sudden back spasms when anxious")) {
    speak("anxiety tenses muscles heat packs and gentle stretches help");
}
else if (message.includes("my knees ache when nervous")) {
    speak("stress affects joints gentle movement and warmth may help");
}
else if (message.includes("i feel like my teeth are too sensitive")) {
    speak("anxiety may cause clenching a mouth guard at night could help");
}
else if (message.includes("why do my cuticles peel more when stressed")) {
    speak("nervous picking is common try keeping hands busy and moisturized");
}
else if (message.includes("i get sudden neck cracking when scared")) {
    speak("anxiety tenses muscles gentle rolls and heat may help");
}
else if (message.includes("my wrists ache when anxious")) {
    speak("stress affects joints gentle exercises and rest can help");
}
else if (message.includes("i feel like my eyebrows twitch")) {
    speak("stress causes small muscle twitches this should pass soon");
}
else if (message.includes("why do my toenails curve when stressed")) {
    speak("nail changes take months see a doctor if concerned");
}
else if (message.includes("i get sudden finger numbness when nervous")) {
    speak("anxiety affects circulation gentle movement can help");
}
else if (message.includes("my thumbs lock when anxious")) {
    speak("stress tenses muscles gentle stretches may release this");
}
else if (message.includes("i feel like my nose runs when scared")) {
    speak("anxiety can trigger nasal reactions this should pass");
}
else if (message.includes("why do my fingernails have ridges when stressed")) {
    speak("mild ridges are normal see a doctor if changes are severe");
}
else if (message.includes("i get sudden toe cramps when nervous")) {
    speak("anxiety tenses muscles gentle massage and movement help");
}
else if (message.includes("my ankles swell when stressed")) {
    speak("see a doctor if swelling persists as anxiety rarely causes this");
}
else if (message.includes("i feel like my lips tingle when anxious")) {
    speak("stress affects nerves this sensation should pass as you calm");
}
else if (message.includes("why do my cuticles crack when nervous")) {
    speak("stress may lead to neglect moisturizing regularly can help");
}
else if (message.includes("i get sudden shoulder aches when scared")) {
    speak("anxiety tenses muscles heat and gentle stretches may help");
}
else if (message.includes("my fingers lock when stressed")) {
    speak("stress causes muscle tension gentle exercises can help");
}
else if (message.includes("i feel like my ears pop when anxious")) {
    speak("anxiety can affect ear pressure yawning gently may help");
}
else if (message.includes("why do my toenails separate when stressed")) {
    speak("see a doctor as this may need treatment unrelated to stress");
}
else if (message.includes("i get sudden rib pain when nervous")) {
    speak("anxiety causes shallow breathing that can ache deep breaths help");
}
else if (message.includes("my hips click when anxious")) {
    speak("stress changes movement patterns this should improve");
}
else if (message.includes("i feel like my chin itches when stressed")) {
    speak("anxiety can cause phantom itches distraction usually helps");
}
else if (message.includes("why do my fingernails peel when nervous")) {
    speak("stress may worsen nail condition keeping them short helps");
}
else if (message.includes("i get sudden elbow pain when scared")) {
    speak("anxiety tenses muscles gentle movement and heat may help");
}
else if (message.includes("my knees lock when stressed")) {
    speak("stress affects joints conscious relaxation and movement help");
}
else if (message.includes("i feel like my forehead sweats more")) {
    speak("anxiety increases sweating this will reduce as you calm");
}
else if (message.includes("why do my cuticles grow uneven when anxious")) {
    speak("stress may make you notice small things more regular care helps");
}
else if (message.includes("i get sudden wrist pain when nervous")) {
    speak("anxiety tenses muscles gentle stretches and rest can help");
}
else if (message.includes("my ankles click when anxious")) {
    speak("stress changes movement this should normalize with calm");
}
else if (message.includes("i feel like my nose itches when stressed")) {
    speak("anxiety can cause phantom itches this usually passes quickly");
}
else if (message.includes("why do my toenails have white spots when nervous")) {
    speak("these are usually harmless but see a doctor if concerned");
}
else if (message.includes("i get sudden finger stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement and warmth can help");
}
else if (message.includes("my thumbs ache when stressed")) {
    speak("stress affects joints rest and gentle exercises may help");
}
else if (message.includes("i feel like my lips swell when anxious")) {
    speak("this is likely just awareness from stress it should pass");
}
else if (message.includes("why do my fingernails break when nervous")) {
    speak("stress may lead to neglect keeping nails moisturized helps");
}
else if (message.includes("i get sudden toe numbness when scared")) {
    speak("anxiety affects circulation gentle movement can help");
}
else if (message.includes("my knees pop when stressed")) {
    speak("stress changes movement patterns this should improve");
}
else if (message.includes("i feel like my ears itch when anxious")) {
    speak("anxiety can cause phantom itches try not to scratch");
}
else if (message.includes("why do my cuticles bleed when nervous")) {
    speak("nervous picking is common keep nails trimmed to prevent");
}
else if (message.includes("i get sudden shoulder tension when scared")) {
    speak("anxiety tenses muscles conscious relaxation can help");
}
else if (message.includes("my fingers tingle when stressed")) {
    speak("stress affects nerves this should pass as you calm");
}
else if (message.includes("i feel like my nose burns when anxious")) {
    speak("anxiety can cause odd sensations this will fade");
}
else if (message.includes("why do my toenails curl when stressed")) {
    speak("nail changes take months see a doctor if concerned");
}
else if (message.includes("i get sudden hip pain when nervous")) {
    speak("anxiety tenses muscles gentle stretches may help");
}
else if (message.includes("my elbows crack when anxious")) {
    speak("stress changes movement this should normalize");
}
else if (message.includes("i feel like my eyebrows hurt when stressed")) {
    speak("anxiety increases awareness this focus will pass");
}
else if (message.includes("why do my fingernails have dents when nervous")) {
    speak("see a doctor if concerned as stress rarely causes this");
}
else if (message.includes("i get sudden foot pain when scared")) {
    speak("anxiety tenses muscles gentle massage can help");
}
else if (message.includes("my toes curl when stressed")) {
    speak("this is a stress response conscious relaxation helps");
}
else if (message.includes("i feel like my lips tingle when nervous")) {
    speak("anxiety affects nerves this sensation should pass");
}
else if (message.includes("why do my cuticles peel when anxious")) {
    speak("nervous picking is common try keeping hands busy");
}
else if (message.includes("i get sudden neck pain when scared")) {
    speak("anxiety tenses muscles heat and gentle rolls help");
}
else if (message.includes("my wrists click when stressed")) {
    speak("stress changes movement this should improve");
}
else if (message.includes("i feel like my nose runs when anxious")) {
    speak("anxiety can trigger nasal reactions this will pass");
}
else if (message.includes("why do my toenails thicken when nervous")) {
    speak("see a doctor if concerned as stress rarely causes this");
}
else if (message.includes("i get sudden back stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement can help");
}
else if (message.includes("my knees ache when stressed")) {
    speak("stress affects joints warmth and rest may help");
}
else if (message.includes("i feel like my ears pop when nervous")) {
    speak("anxiety can affect ear pressure swallowing helps");
}
else if (message.includes("why do my fingernails chip when anxious")) {
    speak("stress may lead to neglect keeping nails short helps");
}
else if (message.includes("i get sudden toe cramps when scared")) {
    speak("anxiety tenses muscles gentle massage can help");
}
else if (message.includes("my ankles swell when anxious")) {
    speak("see a doctor if persistent as anxiety rarely causes this");
}
else if (message.includes("i feel like my lips chap when stressed")) {
    speak("anxiety may cause lip biting balm and hydration help");
}
else if (message.includes("why do my cuticles crack when nervous")) {
    speak("stress may lead to neglect regular moisturizing helps");
}
else if (message.includes("i get sudden shoulder pain when scared")) {
    speak("anxiety tenses muscles heat and gentle stretches help");
}
else if (message.includes("my fingers lock when stressed")) {
    speak("stress causes muscle tension gentle movement can help");
}
else if (message.includes("i feel like my ears itch when anxious")) {
    speak("anxiety can cause phantom itches try not to scratch");
}
else if (message.includes("why do my toenails separate when nervous")) {
    speak("see a doctor as this may need treatment unrelated to stress");
}
else if (message.includes("i get sudden rib aches when scared")) {
    speak("anxiety causes shallow breathing deep breaths can help");
}
else if (message.includes("my hips click when stressed")) {
    speak("stress changes movement patterns this should improve");
}
else if (message.includes("i feel like my chin itches when anxious")) {
    speak("anxiety can cause phantom itches distraction helps");
}
else if (message.includes("why do my fingernails peel when nervous")) {
    speak("stress may worsen nail condition keeping them short helps");
}
else if (message.includes("i get sudden elbow stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement and heat help");
}
else if (message.includes("my knees lock when stressed")) {
    speak("stress affects joints conscious relaxation can help");
}
else if (message.includes("i feel like my forehead sweats when anxious")) {
    speak("anxiety increases sweating this will reduce as you calm");
}
else if (message.includes("why do my cuticles grow uneven when nervous")) {
    speak("stress may make you notice small things regular care helps");
}
else if (message.includes("i get sudden wrist aches when scared")) {
    speak("anxiety tenses muscles gentle stretches can help");
}
else if (message.includes("my ankles click when stressed")) {
    speak("stress changes movement this should normalize");
}
else if (message.includes("i feel like my nose itches when anxious")) {
    speak("anxiety can cause phantom itches this usually passes");
}
else if (message.includes("why do my toenails have spots when nervous")) {
    speak("these are usually harmless but see a doctor if concerned");
}
else if (message.includes("i get sudden finger stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement can help");
}
else if (message.includes("my thumbs ache when stressed")) {
    speak("stress affects joints rest and gentle exercises help");
}
else if (message.includes("i feel like my lips swell when anxious")) {
    speak("this is likely just awareness from stress it will pass");
}
else if (message.includes("why do my fingernails break when nervous")) {
    speak("stress may lead to neglect keeping nails moisturized helps");
}
else if (message.includes("i get sudden toe numbness when scared")) {
    speak("anxiety affects circulation gentle movement helps");
}
else if (message.includes("my knees pop when stressed")) {
    speak("stress changes movement patterns this should improve");
}
else if (message.includes("i feel like my ears itch when anxious")) {
    speak("anxiety can cause phantom itches try not to scratch");
}
else if (message.includes("why do my cuticles bleed when nervous")) {
    speak("nervous picking is common keep nails trimmed to prevent");
}
else if (message.includes("i get sudden shoulder tension when scared")) {
    speak("anxiety tenses muscles conscious relaxation helps");
}
else if (message.includes("my fingers tingle when stressed")) {
    speak("stress affects nerves this should pass as you calm");
}
else if (message.includes("i feel like my nose burns when anxious")) {
    speak("anxiety can cause odd sensations this will fade");
}
else if (message.includes("why do my toenails curl when stressed")) {
    speak("nail changes take months see a doctor if concerned");
}
else if (message.includes("i get sudden hip pain when nervous")) {
    speak("anxiety tenses muscles gentle stretches help");
}
else if (message.includes("my elbows crack when anxious")) {
    speak("stress changes movement this should normalize");
}
else if (message.includes("i feel like my eyebrows hurt when stressed")) {
    speak("anxiety increases awareness this focus will pass");
}
else if (message.includes("why do my fingernails have dents when nervous")) {
    speak("see a doctor if concerned as stress rarely causes this");
}
else if (message.includes("i get sudden foot pain when scared")) {
    speak("anxiety tenses muscles gentle massage helps");
}
else if (message.includes("my toes curl when stressed")) {
    speak("this is a stress response conscious relaxation helps");
}
else if (message.includes("i feel like my lips tingle when nervous")) {
    speak("anxiety affects nerves this sensation should pass");
}
else if (message.includes("why do my cuticles peel when anxious")) {
    speak("nervous picking is common try keeping hands busy");
}
else if (message.includes("i get sudden neck pain when scared")) {
    speak("anxiety tenses muscles heat and gentle rolls help");
}
else if (message.includes("my wrists click when stressed")) {
    speak("stress changes movement this should improve");
}
else if (message.includes("i feel like my nose runs when anxious")) {
    speak("anxiety can trigger nasal reactions this will pass");
}
else if (message.includes("why do my toenails thicken when nervous")) {
    speak("see a doctor if concerned as stress rarely causes this");
}
else if (message.includes("i get sudden back stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement helps");
}
else if (message.includes("my knees ache when stressed")) {
    speak("stress affects joints warmth and rest help");
}
else if (message.includes("i feel like my ears pop when nervous")) {
    speak("anxiety can affect ear pressure swallowing helps");
}
else if (message.includes("why do my fingernails chip when anxious")) {
    speak("stress may lead to neglect keeping nails short helps");
}
else if (message.includes("i get sudden toe cramps when scared")) {
    speak("anxiety tenses muscles gentle massage helps");
}
else if (message.includes("my ankles swell when anxious")) {
    speak("see a doctor if persistent as anxiety rarely causes this");
}
else if (message.includes("i feel like my lips chap when stressed")) {
    speak("anxiety may cause lip biting balm and hydration help");
}
else if (message.includes("why do my cuticles crack when nervous")) {
    speak("stress may lead to neglect regular moisturizing helps");
}
else if (message.includes("i get sudden shoulder pain when scared")) {
    speak("anxiety tenses muscles heat and gentle stretches help");
}
else if (message.includes("my fingers lock when stressed")) {
    speak("stress causes muscle tension gentle movement helps");
}
else if (message.includes("i feel like my ears itch when anxious")) {
    speak("anxiety can cause phantom itches try not to scratch");
}
else if (message.includes("why do my toenails separate when nervous")) {
    speak("see a doctor as this may need treatment unrelated to stress");
}
else if (message.includes("i get sudden rib aches when scared")) {
    speak("anxiety causes shallow breathing deep breaths help");
}
else if (message.includes("my hips click when stressed")) {
    speak("stress changes movement patterns this should improve");
}
else if (message.includes("i feel like my chin itches when anxious")) {
    speak("anxiety can cause phantom itches distraction helps");
}
else if (message.includes("why do my fingernails peel when nervous")) {
    speak("stress may worsen nail condition keeping them short helps");
}
else if (message.includes("i get sudden elbow stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement and heat help");
}
else if (message.includes("my knees lock when stressed")) {
    speak("stress affects joints conscious relaxation helps");
}
else if (message.includes("i feel like my forehead sweats when anxious")) {
    speak("anxiety increases sweating this will reduce as you calm");
}
else if (message.includes("why do my cuticles grow uneven when nervous")) {
    speak("stress may make you notice small things regular care helps");
}
else if (message.includes("i get sudden wrist aches when scared")) {
    speak("anxiety tenses muscles gentle stretches help");
}
else if (message.includes("my ankles click when stressed")) {
    speak("stress changes movement this should normalize");
}
else if (message.includes("i feel like my nose itches when anxious")) {
    speak("anxiety can cause phantom itches this usually passes");
}
else if (message.includes("why do my toenails have spots when nervous")) {
    speak("these are usually harmless but see a doctor if concerned");
}
else if (message.includes("i get sudden finger stiffness when scared")) {
    speak("anxiety tenses muscles gentle movement helps");
}
else if (message.includes("my thumbs ache when stressed")) {
    speak("stress affects joints rest and gentle exercises help");
}
else if (message.includes("i feel like my lips swell when anxious")) {
    speak("this is likely just awareness from stress it will pass");
}
else if (message.includes("why do my fingernails break when nervous")) {
    speak("stress may lead to neglect keeping nails moisturized helps");
}
else if (message.includes("i get sudden toe numbness when scared")) {
    speak("anxiety affects circulation gentle movement helps");
}
else if (message.includes("my knees pop when stressed")) {
    speak("stress changes movement patterns this should improve");
}
else if (message.includes("i feel like my ears itch when anxious")) {
    speak("anxiety can cause phantom itches try not to scratch");
}


    
















    







    else if (message.includes("open youtube")) {
        speak("opening youtube...");
        window.open("https://youtube.com/", "_blank");
    }
    else if (message.includes("open google")) {
        speak("opening google...");
        window.open("https://google.com/", "_blank");
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook...");
        window.open("https://facebook.com/", "_blank");
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram...");
        window.open("https://instagram.com/", "_blank");
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator...");
        window.open("calculator://");
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp...");
        window.open("whatsapp://");
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    }
    else {
        let finalText = "This is what I found on internet regarding " + (message.replace("somya", "") || message);
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("somya", "")}`, "_blank");
    }
}
