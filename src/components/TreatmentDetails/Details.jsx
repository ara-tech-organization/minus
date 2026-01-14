import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Activity, BadgeCheck, BatteryLow, BrushIcon, CaseLowerIcon, ChevronDown, Clock, CloudLightning, CloudLightningIcon, Expand, Eye, FastForward, Flame, Flower, Flower2, FrameIcon, GlassWater, LucideCloudLightning, Shrink, SignalLow, User, WifiZero } from "lucide-react";
import styles from "./Details.module.css";
import slim from "@/assets/slim.png";
import robo from "@/assets/robo.png";
import cyroflash from "@/assets/cryo-flash.png";
import cryomax from "@/assets/cryo-max.png";
import CryoSphere360 from "@/assets/CryoSphere360.png";
import rf from "@/assets/rf.png";
import CryoSculpt from "@/assets/cryo-sculpt.png";
import lymph from "@/assets/lymph.png";
import JawDefine from "@/assets/Jaw.png"
import {
  UtensilsCrossed,
  Pill,
  BookOpenCheck,
  HeartPulse,
  Smile,
  Scissors,
  Timer,
  Target,
  ShieldCheck,
} from "lucide-react";

const DetailsPage = () => {
  const { id } = useParams();

  // ====================== ALL TREATMENT DATA HERE ======================
  const treatments = {
    slimtrim: {
      hero: {
        title: "SLIMFORM CAPSULES",
        description:
          "If weight struggles are interfering with your daily life, it’s time to go beyond just slimming equipment. Sustainable weight management requires a more comprehensive approach, and that’s where slimform capsules come in.",
        image: slim,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "HOW DOES SLIMTRIM WORK?",
        sections: [
          {
            id: 1,
            description:
              "SlimForm Capsules are designed to aid weight loss by regulating metabolism, controlling appetite and reducing fatabsorption. Paired with healthy lifestyle",
          },
          {
            id: 2,
            description:
              "changes, these capsules help you achieve a balanced and a long-term transformation rather than quick and temporary fixes.",
          },
        ],
      },

      whyChoose: {
        title: "WHY CHOOSE SLIMTRIM?",
        subtitle: "Natural metabolism support.",
        benefits: [
          {
            id: 1,
            icon: UtensilsCrossed,
            title: "Appetite Suppression",
            description: "Helps you feel full longer and reduces cravings.",
          },
          {
            id: 2,
            icon: Pill,
            title: "Customized Medication",
            description: "Personalized program works over 3 months to 1 year.",
          },
          {
            id: 3,
            icon: BookOpenCheck,
            title: "Research-Backed",
            description:
              "Safe, effective, and fully doctor-approved formulation.",
          },
          {
            id: 4,
            icon: HeartPulse,
            title: "Health Risk Reduction",
            description: "Lowers chances of diabetes and hypertension.",
          },
          {
            id: 5,
            icon: Smile,
            title: "Quality of Life",
            description: "Enhances overall well-being and daily energy levels.",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "How long does it take to see results?",
            answer:
              "Results vary, but most people start noticing changes within a few weeks, with significant improvement over 3 months to 1 year. Yes, it is made from natural, clinically tested ingredients.",
          },
          {
            id: 2,
            question: "Will I gain the weight back after stopping?",
            answer:
              "With consistent healthy habits, the results are long-lasting. It supports weight maintenance, but lifestyle choices matter too!",
          },
          {
            id: 3,
            question:
              "Can I take these capsules without dieting or exercising?",
            answer:
              "For the best results, a balanced diet and regular activity enhance effectiveness, ensuring sustainable weight management.",
          },
          {
            id: 4,
            question: "Are these suitable for everyone?",
            answer:
              "This works best for those who struggle with weight despite efforts and need extra support. A doctor’s consultation ensures this is the right fit for your journey.",
          },
        ],
      },
    },
    CryoFlash: {
      hero: {
        title: "CryoFlash",
        description:
          "CryoFlash is an advanced cryotherapy treatment that uses extreme cold exposure to trigger rapid fat loss, skin tightening, and muscle recovery. By lowering body temperature to -160°C, it stimulates thermogenesis, forcing the body to burn calories, boost collagen, and reduce inflammation in just minutes.",
        image: cyroflash,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "How Does It Work?",
        sections: [
          {
            id: 1,
            description:
              "CryoFlash uses advanced thermogenesis technology by exposing the body to extreme cold temperatures, which forces the body to work harder to maintain its core temperature.",
          },
          {
            id: 2,
            description:
              "This process burns significant calories rapidly while simultaneously shocking the skin cells to boost collagen production and reduce systemic inflammation.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose CryoFlash?",
        subtitle: "Experience the benefits of advanced whole-body cryotherapy.",
        benefits: [
          {
            id: 1,
            icon: Flame,
            title: "Dual Action",
            description:
              "Dual action treatment that aids in fat loss, while tightening skin.",
          },
          {
            id: 2,
            icon: Timer,
            title: "Quick Sessions",
            description:
              "Sessions last for just 2-4 minutes and provide immediate benefits.",
          },
          {
            id: 3,
            icon: ShieldCheck,
            title: "Non-Invasive",
            description: "Completely non-invasive with no surgery or needles.",
          },
          {
            id: 4,
            icon: HeartPulse,
            title: "Recovery",
            description:
              "Reduces muscle soreness, relieves inflammation and accelerates healing.",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "How quickly will I feel the effects of CryoFlash?",
            answer:
              "You’ll feel instant benefits like muscle relief and increased energy right after your session. Fat reduction and skin-tightening results gradually appear over the following weeks.",
          },
          {
            id: 2,
            question: "Is CryoFlash a permanent solution for fat loss?",
            answer:
              "CryoFlash helps eliminate fat cells, and once they’re gone, they do not return. Maintaining a balanced diet and active lifestyle ensures long-lasting results.",
          },
          {
            id: 3,
            question: "Will I feel extremely cold during the session?",
            answer:
              "You may experience a cooling sensation at first, but your body quickly adapts, making the session comfortable and painless.",
          },
          {
            id: 4,
            question: "How often should I get CryoFlash treatments?",
            answer:
              "It depends on your goals. Some notice results after one session, while others choose weekly or bi-weekly treatments for enhanced sculpting and recovery.",
          },
          {
            id: 5,
            question:
              "Can I work out or go about my day as usual after the session?",
            answer:
              "Absolutely! CryoFlash has zero downtime, so you can go to work, exercise, or continue your day normally right after treatment.",
          },
        ],
      },
    },
    CryoMax: {
      hero: {
        title: "CryoMax Sculpting",
        description:
          "CryoMax Sculpting combines cutting-edge 10D Maxlipo technology with cryotherapy to target stubborn fat and saggy skin. By exposing fat cells to controlled cooling, it triggers their natural breakdown while stimulating collagen production for firmer, more sculpted skin.",
        image: cryomax,
        buttons: [
          { text: "BOOK SESSION", variant: "primary" },
          { text: "VIEW BENEFITS", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "How Does It Work?",
        sections: [
          {
            id: 1,
            description:
              "The dual-action treatment begins by using 10D Maxlipo technology to break down fat cells, while cryotherapy simultaneously exposes the targeted area to controlled cooling.",
          },
          {
            id: 2,
            description:
              "This process naturally eliminates stubborn fat deposits and stimulates collagen production, resulting in both fat reduction and skin tightening for a contoured look.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose CryoMax Sculpting?",
        subtitle:
          "With CryoMax Sculpting, achieving a toned, refined body has never been easier.",
        benefits: [
          {
            id: 1,
            icon: Flame,
            title: "Dual Action",
            description:
              "Reduces fat while tightening sagging skin for a contoured look.",
          },
          {
            id: 2,
            icon: Activity,
            title: "Boosts Metabolism",
            description:
              "Boosts metabolism, increasing calorie burn even after the session.",
          },
          {
            id: 3,
            icon: Timer,
            title: "Quick Sessions",
            description:
              "Treatments last just for 15-20 minutes with noticeable results.",
          },
          {
            id: 4,
            icon: ShieldCheck,
            title: "Non-Invasive",
            description:
              "No surgery, no needles, and no downtime; walk in and out with ease.",
          },
          {
            id: 5,
            icon: BadgeCheck,
            title: "Permanent Results",
            description:
              "Results are permanent, where the fat cells once eliminated do not return.",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "How soon can I see results with CryoMax Sculpting?",
            answer:
              "Many clients notice changes within a few weeks as the body naturally eliminates fat cells, with optimal results visible in 6–12 weeks.",
          },
          {
            id: 2,
            question: "How long do the results last?",
            answer:
              "CryoMax Sculpting provides permanent fat reduction since treated fat cells are eliminated. Maintaining a healthy lifestyle is essential to prevent new fat accumulation.",
          },
          {
            id: 3,
            question: "Is there any discomfort during the treatment?",
            answer:
              "The treatment is completely painless. Most people experience a mild tingling sensation during the session that disappears immediately afterward.",
          },
          {
            id: 4,
            question: "How many sessions will I need?",
            answer:
              "The number of sessions depends on individual goals. Some see results after one session, while others benefit from multiple treatments for enhanced sculpting.",
          },
          {
            id: 5,
            question: "Can I resume normal activities after the session?",
            answer:
              "Absolutely! CryoMax Sculpting requires no downtime, so you can return to work, exercise, or daily activities immediately.",
          },
        ],
      },
    },
    CryoSphere360: {
      hero: {
        title: "CryoSphere 360°",
        description:
          "If stubborn fat and sagging skin have been holding you back, it’s time to meet CryoSphere 360°, a non-invasive treatment that freezes fat, tightens skin, and boosts metabolism in just minutes. With advanced cryotherapy technology, it helps you achieve a sculpted body and firmer skin without surgery, needles, or downtime.",
        image: CryoSphere360,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "How Does It Work?",
        sections: [
          {
            id: 1,
            description:
              "CryoSphere 360° works by exposing fat cells to extreme cold temperatures as low as -150°C...",
          },
          {
            id: 2,
            description:
              "...triggering their natural breakdown while stimulating collagen production for firmer, toned skin.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose CryoSphere 360°?",
        subtitle:
          "Experience the power of cold therapy and redefine your shape effortlessly!",
        benefits: [
          {
            id: 1,
            icon: Flame,
            title: "Dual Action",
            description: "Dual benefits of fat reduction and skin tightening.",
          },
          {
            id: 2,
            icon: Activity,
            title: "Accelerated Metabolism",
            description:
              "Accelerated metabolism and post-session calorie burn.",
          },
          {
            id: 3,
            icon: Timer,
            title: "Quick Sessions",
            description:
              "Quick and effective sessions lasting up to 3 minutes.",
          },
          {
            id: 4,
            icon: ShieldCheck,
            title: "Non-Invasive",
            description: "No surgery, needles, or downtime.",
          },
          {
            id: 5,
            icon: BadgeCheck,
            title: "Permanent Results",
            description:
              "Permanent fat reduction where fat cells are gone for good.",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "Is CryoSphere 360° safe for all skin types?",
            answer:
              "Yes! The treatment is completely safe and suitable for all skin types. It only affects fat cells while leaving the surrounding skin and tissues unharmed.",
          },
          {
            id: 2,
            question: "Can I do this treatment if I have sensitive skin?",
            answer:
              "Absolutely. The cooling technology is gentle yet effective, and our experts customize the treatment based on your skin’s tolerance.",
          },
          {
            id: 3,
            question: "Will my skin feel numb after the session?",
            answer:
              "You may experience mild tingling immediately after the treatment, but it subsides within a few minutes to an hour.",
          },
          {
            id: 4,
            question:
              "Can CryoSphere 360° be combined with other body contouring treatments?",
            answer:
              "Yes! It works well alongside other non-invasive treatments like radiofrequency or lymph detoxify for enhanced results.",
          },
          {
            id: 5,
            question: "How do I maintain my results after the treatment?",
            answer:
              "Maintaining a healthy diet and active lifestyle will help preserve your sculpted look. Regular hydration and movement also support lymph detoxify, speeding up fat elimination.",
          },
        ],
      },
    },
    CryoSculpt: {
      hero: {
        title: "CryoSculpt",
        description:
          "If stubborn fat refuses to budge, despite your best efforts, it is time to introduce you to CryoSculpt... resulting in a more sculpted and contoured physique without the need of surgery, needles or a downtime.",
        image: CryoSculpt,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "How Does It Work?",
        sections: [
          {
            id: 1,
            description:
              "CryoSculpt works by precisely cooling fat cells to a temperature that triggers their natural breakdown while leaving surrounding tissues unharmed.",
          },
          {
            id: 2,
            description:
              "Over the following weeks, your body gradually processes and eliminates these fat cells, revealing a leaner, more toned look.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose CryoSculpt?",
        subtitle:
          "With CryoSculpt, you don’t need extreme workouts or invasive procedures to achieve a leaner, more contoured look.",
        benefits: [
          {
            id: 1,
            icon: Flame,
            title: "Precise Contouring",
            description:
              "Effectively targets stubborn fat forprecise body contouring.",
          },
          {
            id: 2,
            icon: Activity,
            title: "Quick Sessions",
            description:
              "Each session lasts just about 15-20 minutes and you can resume daily activities immediately.",
          },
          {
            id: 3,
            icon: Timer,
            title: "Permanent Results",
            description:
              "Once fat cells are eliminated, they are gone for good.",
          },
          {
            id: 4,
            icon: ShieldCheck,
            title: "Non-Invasive",
            description:
              "Visible results without the need for needles or incisions.",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "How long does it take to see results?",
            answer:
              "Results start becoming visible within 3–4 weeks, with optimal results appearing around 8–12 weeks as your body naturally eliminates the treated fat cells.",
          },
          {
            id: 2,
            question: "Is CryoSculpt painful?",
            answer:
              "Not at all! You may feel a slight cooling sensation initially, but clients find the procedure comfortable and even relaxing.",
          },
          {
            id: 3,
            question: "How many sessions do I need?",
            answer:
              "The number of sessions depends on your goals. Some people achieve their desired results in just one session, while others may need multiple treatments for enhanced sculpting.",
          },
          {
            id: 4,
            question: "Can CryoSculpt help with weight loss?",
            answer:
              "CryoSculpt is designed for fat reduction, not weight loss. It’s ideal for targeting stubborn fat areas that don’t respond to diet and exercise.",
          },
          {
            id: 5,
            question: "Are the results permanent?",
            answer:
              "Yes! Once the treated fat cells are gone, they won’t come back. However, maintaining a healthy lifestyle is essential to prevent new fat accumulation.",
          },
        ],
      },
    },
    robotic: {
      hero: {
        title: "AI Robotic Sonic Slim",
        description:
          "Stubborn fat that refuses to budge, no matter how much you diet or exercise? It’s time for a smarter, more effective solution; without surgery, needles, or downtime.",
        image: robo,
        buttons: [
          { text: "BOOK SESSION", variant: "primary" },
          { text: "VIEW BENEFITS", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "HOW DOES CRYOSCULPT WORK?",
        sections: [
          {
            id: 1,
            description:
              "AI Robotic Sonic Slim harnesses the power of low-frequency ultrasound waves to target and break down fat cells beneath the skin.",
          },
          {
            id: 2,
            description:
              "These disrupted fat cells are then naturally eliminated by the body’s lymphatic system... completely pain-free and non-invasive",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose AI Robotic Sonic Slim?",
        subtitle:
          "Experience the benefits of advanced ultrasound body contouring.",
        benefits: [
          {
            id: 1,
            icon: Scissors,
            title: "Non-Surgical",
            description:
              "This advanced ultrasound technology works its magic without the need of surgery and needles.",
          },
          {
            id: 2,
            icon: Timer,
            title: "Quick Sessions",
            description:
              "Each session lasts just 30-60 minutes, making it the ideal choice for a busy lifestyle.",
          },
          {
            id: 3,
            icon: Target,
            title: "Targeted Results",
            description:
              "Focuses on tricky fat pockets that diet and exercise can’t touch.",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "How soon will I see results?",
            answer:
              "Some clients notice visible changes in just a few sessions, while optimal results typically appear within 6 to 12 weeks as the body gradually eliminates fat.",
          },
          {
            id: 2,
            question: "Is the treatment painful?",
            answer:
              "Not at all! Most people feel a gentle warmth and slight tingling, but the treatment is completely pain-free and relaxing.",
          },
          {
            id: 3,
            question: "How many sessions do I need?",
            answer:
              "It depends on your goals. Some see results after just one session, while others opt for multiple treatments for enhanced sculpting. A consultation will help determine the best plan for you.",
          },
          {
            id: 4,
            question: "Does the fat come back?",
            answer:
              "The treated fat cells are permanently eliminated. However, maintaining a healthy lifestyle will help ensure long-lasting results.",
          },
          {
            id: 5,
            question:
              "Can I combine this with other body contouring treatments?",
            answer:
              "Yes! AI Robotic Sonic Slim works well with other non-invasive treatments like Lymph Detoxify or skin tightening for even better results.",
          },
        ],
      },
    },
    rf: {
      hero: {
        title: "Skin Fusion RF Sculpting",
        description:
          "Is your skin feeling saggy? Stubborn fat not budging? Meet Skin Fusion RFSculpting... Tighter, firmer, and smoother skin! Plus, it doesn’t stop there; RF technology melts away stubborn fat, sculpting and defining your body without downtime or discomfort.",
        image: rf,
        buttons: [
          { text: "BOOK SESSION", variant: "primary" },
          { text: "VIEW BENEFITS", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "How Does It Work?",
        sections: [
          {
            id: 1,
            description:
              "Skin Fusion RF Sculpting utilizes advanced radiofrequency waves that penetrate the skin's surface to gently heat the deeper dermal layers.",
          },
          {
            id: 2,
            description:
              "This controlled thermal energy triggers the body's natural healing response, stimulating the production of new collagen and elastin fibers for tighter, smoother skin.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose Skin Fusion RF Sculpting?",
        subtitle:
          "Experience the benefits of advanced non-invasive skin tightening.",
        benefits: [
          {
            id: 1,
            icon: Scissors,
            title: "Comfortable & Painless",
            description:
              "RF sculpting is painless, giving a soothing warmth with zero discomfort.",
          },
          {
            id: 2,
            icon: Timer,
            title: "Zero Downtime",
            description:
              "No needles equals no recovery time. You can get back to your day immediately after the session.",
          },
          {
            id: 3,
            icon: Target,
            title: "Versatile Treatment",
            description:
              "Whether it’s the abdomen, arms, thighs, or even your face, this treatment lifts, firms, and contours all in one go!",
          },
        ],
      },

      faq: {
        title: "FAQ",
        questions: [
          {
            id: 1,
            question: "Is Skin Fusion RF Sculpting safe for all skin types?",
            answer:
              "Absolutely! This treatment is non-invasive and safe for all skin types and tones.",
          },
          {
            id: 2,
            question: "Does it help with wrinkles and sagging skin?",
            answer:
              "Yes! The RF energy boosts collagen and elastin, making it effective for tightening loose skin and reducing wrinkles.",
          },
          {
            id: 3,
            question: "How soon can I see results?",
            answer:
              "Many notice a visible improvement right after the first session, with optimal results appearing over a few weeks as collagen production increases.",
          },
          {
            id: 4,
            question: "How long does a session take?",
            answer:
              "Each session typically lasts 30-60 minutes, depending on the treatment area.",
          },
          {
            id: 5,
            question: "Do the results last?",
            answer:
              "Yes! With proper skin care and a healthy lifestyle, results can last several months, with occasional maintenance sessions recommended.",
          },
        ],
      },
    },
    LymphDetoxify: {
      hero: {
        title: "Lymph Detoxify",
        description:
          "Ever feel like your body is holding on to extra weight, puffiness, or just general sluggishness? That’s where Lymph Detoxify comes in. Our specialized treatment targets fluid retention and helps flush out toxins naturally.",
        image: lymph,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "HOW DOES IT WORK?",
        sections: [
          {
            id: 1,
            description:
              "Using a gentle, rhythmic technique, Lymph Detoxify stimulates the lymphatic system, which acts as the body’s natural drainage filter. This process encourages lymph fluid circulation, effectively removing waste products, excess fluid, and metabolic toxins from your tissues.",
          },
          {
            id: 2,
            description:
              "The result? A lighter, more energized you! By reducing fluid retention and boosting circulation, this treatment not only slims the silhouette but also enhances your immune system and overall skin tone, leaving you feeling revitalized from the inside out.",
          },
        ],
      },

      whyChoose: {
        title: "WHY CHOOSE LYMPH DETOXIFY?",
        subtitle: "Give your body the refresh it deserves!",
        benefits: [
          {
            id: 1,
            icon: Flame,
            title: "Puffiness Reduction",
            description: "ESignificantly reduces water retention and bloating.",
          },
          {
            id: 2,
            icon: GlassWater,
            title: "Detoxification",
            description:
              "Flushes out metabolic waste and environmental toxins.",
          },
          {
            id: 3,
            icon: Flower,
            title: "Skin Rejuvenation",
            description:
              "Promotes a clearer, healthier complexion through better flow.",
          },
          {
            id: 4,
            icon: Activity,
            title: "Reduced Tension",
            description:
              "Relieves muscle tension and promotes deep relaxation.",
          },
          {
            id: 5,
            icon: FastForward,
            title: "Faster Recovery",
            description: "Accelerates healing post-exercise or post-surgery.",
          },
        ],
      },

      faq: {
        title: "FREQ. ASKED QUESTIONS",
        questions: [
          {
            id: 1,
            question: "How soon will I notice a difference?",
            answer:
              "Most people feel lighter and more refreshed immediately after their session, with visible improvements in puffiness and swelling over the next few days.",
          },
          {
            id: 2,
            question: "Is the treatment painful?",
            answer:
              "Not at all! The process is gentle and soothing, often compared to a light, rhythmic massage.",
          },
          {
            id: 3,
            question: "How often should I get this treatment?",
            answer:
              "It depends on your goals. A few sessions per month can work wonders for detox, but for ongoing maintenance, once a month is ideal.",
          },
          {
            id: 4,
            question: "Will I lose weight with Lymph Detoxify?",
            answer:
              "While this isn’t a weight-loss treatment, it helps eliminate excess fluids, which can make you look and feel leaner and less bloated.",
          },
          {
            id: 5,
            question: "Can it help with cellulite?",
            answer:
              "Yes! By improving circulation and breaking down fluid buildup, this treatment can help reduce the appearance of cellulite over time.",
          },
        ],
      },
    },
    Silhouette: {
      hero: {
        title: "Silhouette Refinement",
        description:
          "Fat, bloating, and sagging skin can sometimes blur your body’s details. Silhouette Refinement is a transformative treatment that sculpts, defines, and rejuvenates your body.",
        image: lymph,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "HOW DOES IT WORK?",
        sections: [
          {
            id: 1,
            description:
              "By combining the power of Therma Wraps, EMS Heimsture muscle stimulation, and Lymph Detoxify therapy, we target the body's structure at multiple levels to address underlying aesthetic concerns effectively.",
          },
          {
            id: 2,
            description:
              "The comprehensive process works by deeply tightening, toning, and detoxifying simultaneously, so the body can reveal its best shape with enhanced definition and contour.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose Silhouette Refinement?",
        subtitle:
          "With Silhouette Refinement, you can sculpt your body, firm your skin, and detoxify; all in one relaxing",
        benefits: [
          {
            id: 1,
            icon: Shrink,
            title: "Fat Shrinking & Toning",
            description:
              "Targets stubborn areas to reduce volume and enhance muscle tone.",
          },
          {
            id: 2,
            icon: GlassWater,
            title: "Elasticity & Smoothing",
            description:
              "Restores skin firmness and smooths out surface irregularities.",
          },
          {
            id: 3,
            icon: Flame,
            title: "Metabolism Boost",
            description:
              "Stimulates metabolic activity for enhanced calorie burning.",
          },
          {
            id: 4,
            icon: Activity,
            title: "Non-Invasive Relaxation",
            description:
              "A comfortable, pain-free experience that revitalizes your body.",
          },
          {
            id: 5,
            icon: Flower2,
            title: "Tighter Skin / Inch Loss",
            description: "Visible contouring results and measurable inch loss.",
          },
        ],
      },

      faq: {
        title: "FREQ. ASKED QUESTIONS",
        questions: [
          {
            id: 1,
            question: "How does EMS Heimsture help with muscle toning?",
            answer:
              "EMS Heimsture technology stimulates deep muscle contractions, mimicking an intense workout to strengthen and define muscles effortlessly.",
          },
          {
            id: 2,
            question:
              "Can this treatment help with water retention and bloating?",
            answer:
              "Absolutely! The therma wrap and lymph detoxify components work together to flush out excess fluids, reducing bloating and improving overall body shape.",
          },
          {
            id: 3,
            question: "Is this treatment safe for all skin types?",
            answer:
              "Yes, Silhouette Refinement is completely non-invasive and safe for all skin types, including sensitive skin.",
          },
          {
            id: 4,
            question: "Does the therma wrap have any side effects?",
            answer:
              "Not at all! The therma wrap contains advanced formulations that detoxify, hydrate, and firm the skin, leaving it soft, smooth, and refreshed.",
          },
          {
            id: 5,
            question: "How soon can I see results?",
            answer:
              "People start to notice a lighter, more sculpted look after just one session, with enhanced toning and definition over multiple treatments.",
          },
        ],
      },
    },
    JawDefine: {
      hero: {
        title: "JawDefine Contour",
        description:
          "JawDefine Contour is here to reshape, refine, and redefine your jawline with cutting-edge Skin Fusion RF technology. Achieve a tighter, firmer, and more sculpted jawline without surgery or downtime.",
        image: JawDefine,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "HOW DOES IT WORK?",
        sections: [
          {
            id: 1,
            description:
              "By breaking down stubborn fat deposits and tightening loose skin, the advanced treatment specifically targets the submental area to clear definition inhibitors.",
          },
          {
            id: 2,
            description:
              "JawDefine Contour works with your body’s natural processes to give you the contoured profile you’ve always wanted, enhancing your natural structure.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose JawDefine Contour?",
        subtitle:
          "JawDefine Contour uses no needles and has no discomfort. The treatment is efficient and takes less than an hour.",
        benefits: [
          {
            id: 1,
            icon: Shrink,
            title: "Non-Invasive Relaxation",
            description:
              "A relaxing experience that uses no needles and causes no discomfort.",
          },
          {
            id: 2,
            icon: Clock,
            title: "Zero Downtime",
            description:
              "Return to your daily routine immediately after the session.",
          },
          {
            id: 3,
            icon: Flame,
            title: "Double Chin Reduction",
            description:
              "Targeted technology to reduce submental fullness effectively.",
          },
          {
            id: 4,
            icon: Activity,
            title: "Collagen Stimulation",
            description:
              "Promotes natural collagen production for long-lasting firmness.",
          },
          {
            id: 5,
            icon: Flower2,
            title: "Quick Visible Results",
            description:
              "Sessions take less than an hour with fast, noticeable improvements.",
          },
        ],
      },

      faq: {
        title: "FREQ. ASKED QUESTIONS",
        questions: [
          {
            id: 1,
            question: "How soon will I see results?",
            answer:
              "Visible results are usually seen after just one session, with continued improvements as collagen production increases.",
          },
          {
            id: 2,
            question: "Is the treatment painful?",
            answer:
              "Not at all! The process involves a gentle warming sensation that feels more like a relaxing facial massage.",
          },
          {
            id: 3,
            question: "How long do the results last?",
            answer:
              "Results can last for months, especially when combined with a healthy lifestyle and proper skincare.",
          },
          {
            id: 4,
            question: "Can this work for all skin types?",
            answer:
              "Yes! JawDefine Contour is safe and effective for all skin tones and types.",
          },
          {
            id: 5,
            question: "How many sessions will I need?",
            answer:
              "While some notice improvements after one session, a series of treatments delivers the most sculpted and long-lasting results.",
          },
        ],
      },
    },
    Lipo: {
      hero: {
        title: "Lipo Contour",
        description:
          "Even with consistent workouts and a disciplined diet, some areas of stubborn fat refuse to budge. That’s where Lipo Contour comes in. It is a revolutionary inch-loss and body-sculpting treatment that melts fat, tones skin, and boosts metabolism effortlessly.",
        image: JawDefine,
        buttons: [
          { text: "START YOUR JOURNEY", variant: "primary" },
          { text: "LEARN MORE", variant: "secondary" },
        ],
      },

      howItWorks: {
        title: "HOW DOES IT WORK?",
        sections: [
          {
            id: 1,
            description:
              "Using the power of LipoMax Pro Light and Therma Wrap, this treatment shrinks fat cells naturally, prompting the body to flush them out.",
          },
          {
            id: 2,
            description:
              "The Therma Wrap enhance circulation, promote detoxification, and accelerate calorie burn, leaving the body looking sculpted, contoured, and visibly slimmer.",
          },
        ],
      },

      whyChoose: {
        title: "Why Choose Lipo Contour?",
        subtitle:
          "JawDefine Contour uses no needles and has no discomfort. The treatment is efficient and takes less than an hour.",
        benefits: [
          {
            id: 1,
            icon: FrameIcon,
            title: "10D Laser Precision",
            description:
              "Targets fat cells with high accuracy for maximum inch loss.",
          },
          {
            id: 2,
            icon: Expand,
            title: "Skin Elasticity",
            description:
              "Improves skin tone and tightness alongside fat reduction.",
          },
          {
            id: 3,
            icon: Flame,
            title: "Non-Invasive Relaxation",
            description:
              "A comfortable procedure with zero downtime or surgical risks.",
          },
          {
            id: 4,
            icon: Eye,
            title: "Visible Results",
            description:
              "Noticeable contouring and inch loss often seen after initial sessions.",
          },
          {
            id: 5,
            icon: User,
            title: "Personalized Shaping",
            description:
              "Tailored treatment plans to address your specific problem areas.",
          },
        ],
      },

      faq: {
        title: "FREQ. ASKED QUESTIONS",
        questions: [
          {
            id: 1,
            question: "How soon can results be seen?",
            answer:
              "People start to notice a difference after just one session, with optimal results appearing after multiple treatments as the body naturally eliminates fat cells.",
          },
          {
            id: 2,
            question: "Is this treatment safe for all body types?",
            answer:
              "Yes! Lipo Contour is a non-invasive and gentle treatment, making it safe and effective for all body types.",
          },
          {
            id: 3,
            question: "Will the therma wrap feel uncomfortable?",
            answer:
              "Not at all! The heat level is adjustable, ensuring a pleasant and soothing experience while maximizing fat burn and detox benefits.",
          },
          {
            id: 4,
            question: "How long do the results last?",
            answer:
              "Results are long-lasting, especially when combined with a healthy lifestyle and proper hydration to maintain the body’s fat-burning efficiency.",
          },
        ],
      },
    },

    // ===================== ADD MORE TREATMENTS HERE =====================
  };

  // SELECT TREATMENT BASED ON ID
  const data = treatments[id];

  // IF INVALID ID
  if (!data) {
    return <h2 className={styles.notFound}>Treatment Not Found</h2>;
  }

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // ====================== TEMPLATE RENDER ======================
  return (
    <div className={styles.detailsPage}>
      {/* ================= HERO SECTION ================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <img src={data.hero.image} alt={data.hero.title} />
          </div>

          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{data.hero.title}</h1>
            <p className={styles.heroDescription}>{data.hero.description}</p>

            <div className={styles.heroButtons}>
              {data.hero.buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`${styles.heroButton} ${
                    btn.variant === "primary"
                      ? styles.primaryButton
                      : styles.secondaryButton
                  }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className={styles.howItWorks}>
        <h2 className={styles.howsectionTitle}>{data.howItWorks.title}</h2>

        <div className={styles.howItWorksGrid}>
          {data.howItWorks.sections.map((item) => (
            <div key={item.id} className={styles.howItWorksCard}>
              <p className={styles.howItWorksText}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className={styles.whyChoose}>
        <h2 className={styles.sectionTitle}>{data.whyChoose.title}</h2>
        <p className={styles.whyChooseSubtitle}>{data.whyChoose.subtitle}</p>

        <div className={styles.benefitsGrid}>
          {data.whyChoose.benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitDescription}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>{data.faq.title}</h2>

        <div className={styles.faqList}>
          {data.faq.questions.map((q, index) => (
            <div
              key={q.id}
              className={`${styles.faqItem} ${
                openFAQ === index ? styles.faqOpen : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => {
                  console.log("FAQ clicked:", index);
                  toggleFAQ(index);
                }}
              >
                <span>{q.question}</span>
                <ChevronDown
                  className={`${styles.faqIcon} ${
                    openFAQ === index ? styles.rotate : ""
                  }`}
                />
              </button>

              {openFAQ === index && (
                <div className={styles.faqAnswer}>
                  <p>{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section className={styles.booking}>
        <h2 className={styles.sectionTitle}>BOOK A CONSULTATION</h2>

        <form className={styles.bookingForm}>
          <input type="text" placeholder="Name" className={styles.formInput} />
          <input
            type="email"
            placeholder="Email"
            className={styles.formInput}
          />
          <input type="date" className={styles.formInput} />
          <input type="time" className={styles.formInput} />

          <button className={styles.bookButton}>BOOK NOW</button>
        </form>
      </section>
    </div>
  );
};

export default DetailsPage;
