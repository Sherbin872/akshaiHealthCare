import React, { useState, useEffect } from "react";
import {
  Send,
  ChevronRight,
  CheckCircle,
  Phone,
  Shield,
  Clock,
  User,
  MapPin,
  Calendar,
  Heart,
  ArrowLeft,
  Sparkles,
  Loader2,
  Download,
} from "lucide-react";
import brochure from "../assets/Akshai Healthcare Service Brochure.png";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    googleMapLink: "",
    address: "",
    pincode: "",
    careGiverPlan: "",
    patientConditionCategory: "",
    patientName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    patientCondition: {
      conscious: false,
      unconscious: false,
      independentWalking: false,
      walkWithSupport: false,
      oxygenSupport: false,
      bedSore: false,
    },
    hasTubes: "",
    shiftPreference: "",
    services: {
      diaperChange: false,
      spongingBathing: false,
      toiletAssistance: false,
      urineBagEmptying: false,
      catheterHygiene: false,
      feedingNutrition: false,
      oralFeeding: false,
      emotionalPhysicalSupport: false,
      companionship: false,
      lightExercise: false,
      dementiaCare: false,
      medicalAndHealthMonitoring: false,
      medicineReminder: false,
      bloodSugarMonitoring: false,
      insulinAdministration: false,
      digitalMonitoring: false,
      emergencyCare: false,
      drsAppointments: false,
      hospitalAssistance: false,
    },
    serviceDuration: "",
    startPreference: "",
    startDate: "",
    startDateCalendar: "",
    preferredLanguages: {
      tamil: false,
      english: false,
      telugu: false,
      malayalam: false,
      hindi: false,
    },
    otherLanguage: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyRelationOther: "",
    emergencyMobile: "",
    emergencyEmail: "",
    emergencyAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLocating, setIsLocating] = useState(false);
  const totalSteps = 9;

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqklgbk";

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Geolocation handler to fetch Google Map coordinates link
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser or requires a secure connection (HTTPS). Please paste the Google Maps link manually.");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setFormData((prev) => ({ ...prev, googleMapLink: mapUrl }));
        setTouched((prev) => ({ ...prev, googleMapLink: true }));
        setErrors((prev) => ({ ...prev, googleMapLink: "" }));
        setIsLocating(false);
      },
      (error) => {
        setIsLocating(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location permission was denied. Please enable location permissions for this site in your browser settings or paste the link manually.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable. Please check your network or paste the Google Maps link manually.");
            break;
          case error.TIMEOUT:
            alert("The request to get your location timed out. Please try again or paste the link manually.");
            break;
          default:
            alert("An unknown error occurred while retrieving location. Please paste the link manually.");
            break;
        }
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  };

  // ===== REAL-TIME VALIDATION ON BLUR =====
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim() || value.trim().length < 2)
          return "Please enter your full name (at least 2 characters)";
        return "";
      case "mobile":
        if (!value.trim()) return "Mobile number is required";
        if (!/^[6-9]\d{9}$/.test(value.trim()))
          return "Please enter a valid 10-digit Indian mobile number";
        return "";
      case "location":
        if (!value.trim() || value.trim().length < 2)
          return "Please enter your city/state";
        return "";
      case "address":
        if (!value.trim() || value.trim().length < 5)
          return "Please enter your complete address";
        return "";
      case "pincode":
        if (!value.trim()) return "Pincode is required";
        if (!/^\d{6}$/.test(value.trim()))
          return "Please enter a valid 6-digit pincode";
        return "";
      case "careGiverPlan":
        if (!value) return "Please select a care giver plan";
        return "";
      case "patientConditionCategory":
        if (!value) return "Please select a patient condition category";
        return "";
      case "patientName":
        if (!value.trim() || value.trim().length < 2)
          return "Please enter patient's full name";
        return "";
      case "age":
        if (!value) return "Age is required";
        if (isNaN(value) || value < 1 || value > 120)
          return "Please enter a valid age (1-120)";
        return "";
      case "gender":
        if (!value) return "Please select gender";
        return "";
      case "height":
        if (!value.trim()) return "Height is required";
        if (isNaN(value) || value < 1 || value > 8)
          return "Please enter valid height in feet (e.g., 5.6)";
        return "";
      case "weight":
        if (!value.trim()) return "Weight is required";
        if (isNaN(value) || value < 20 || value > 300)
          return "Please enter valid weight in kg (20-300)";
        return "";
      case "hasTubes":
        if (!value) return "Please select Yes or No";
        return "";
      case "shiftPreference":
        if (!value) return "Please select a shift preference";
        return "";
      case "serviceDuration":
        if (!value) return "Please select a service duration";
        return "";
      case "startPreference":
        if (!value) return "Please select when to start";
        return "";
      case "startDateCalendar":
        if (formData.startPreference === "Select Date" && !value)
          return "Please select a start date";
        return "";
      case "emergencyName":
        if (!value.trim() || value.trim().length < 2)
          return "Please enter emergency contact's full name";
        return "";
      case "emergencyRelation":
        if (!value) return "Please select relationship";
        return "";
      case "emergencyRelationOther":
        if (formData.emergencyRelation === "Other" && !value.trim())
          return "Please specify the relation";
        return "";
      case "emergencyMobile":
        if (!value.trim()) return "Emergency mobile number is required";
        if (!/^[6-9]\d{9}$/.test(value.trim()))
          return "Please enter a valid 10-digit Indian mobile number";
        return "";
      case "emergencyEmail":
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Please enter a valid email address";
        return "";
      case "emergencyAddress":
        if (!value.trim() || value.trim().length < 5)
          return "Please enter emergency contact's address";
        return "";
      default:
        return "";
    }
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If field was already touched, validate in real-time
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: errorMsg || "",
      }));
    }
  };

  // Mark field as touched and validate on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg || "",
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name.startsWith("patientCondition.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        patientCondition: { ...prev.patientCondition, [field]: checked },
      }));
    } else if (name.startsWith("services.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        services: { ...prev.services, [field]: checked },
      }));
      // Clear services error if at least one selected
      if (errors.services) setErrors((prev) => ({ ...prev, services: "" }));
    } else if (name.startsWith("preferredLanguages.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        preferredLanguages: { ...prev.preferredLanguages, [field]: checked },
      }));
      if (errors.preferredLanguages)
        setErrors((prev) => ({ ...prev, preferredLanguages: "" }));
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg || "" }));
  };

  // ===== FULL STEP VALIDATION (for Next/Submit button) =====
  const getStep1Errors = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2)
      errs.name = "Please enter your full name (at least 2 characters)";
    if (!formData.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim()))
      errs.mobile = "Please enter a valid 10-digit Indian mobile number";
    if (!formData.location.trim() || formData.location.trim().length < 2)
      errs.location = "Please enter your city/state";
    if (!formData.address.trim() || formData.address.trim().length < 5)
      errs.address = "Please enter your complete address";
    if (!formData.pincode.trim()) errs.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(formData.pincode.trim()))
      errs.pincode = "Please enter a valid 6-digit pincode";
    if (!formData.careGiverPlan)
      errs.careGiverPlan = "Please select a care giver plan";
    if (!formData.patientConditionCategory)
      errs.patientConditionCategory =
        "Please select a patient condition category";
    return errs;
  };

  const getStep2Errors = () => {
    const errs = {};
    if (!formData.patientName.trim() || formData.patientName.trim().length < 2)
      errs.patientName = "Please enter patient's full name";
    if (!formData.age) errs.age = "Age is required";
    else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120)
      errs.age = "Please enter a valid age (1-120)";
    if (!formData.gender) errs.gender = "Please select gender";
    if (!formData.height.trim()) errs.height = "Height is required";
    else if (
      isNaN(formData.height) ||
      formData.height < 1 ||
      formData.height > 8
    )
      errs.height = "Please enter valid height in feet (e.g., 5.6)";
    if (!formData.weight.trim()) errs.weight = "Weight is required";
    else if (
      isNaN(formData.weight) ||
      formData.weight < 20 ||
      formData.weight > 300
    )
      errs.weight = "Please enter valid weight in kg (20-300)";
    return errs;
  };

  const getStep3Errors = () => {
    const errs = {};
    if (!formData.hasTubes) errs.hasTubes = "Please select Yes or No";
    return errs;
  };

  const getStep4Errors = () => {
    const errs = {};
    if (!formData.shiftPreference)
      errs.shiftPreference = "Please select a shift preference";
    return errs;
  };

  const getStep5Errors = () => {
    const errs = {};
    if (!Object.values(formData.services).some((v) => v === true))
      errs.services = "Please select at least one service";
    return errs;
  };

  const getStep6Errors = () => {
    const errs = {};
    if (!formData.serviceDuration)
      errs.serviceDuration = "Please select a service duration";
    return errs;
  };

  const getStep7Errors = () => {
    const errs = {};
    if (!formData.startPreference)
      errs.startPreference = "Please select when to start";
    if (formData.startPreference === "Select Date" && !formData.startDateCalendar)
      errs.startDateCalendar = "Please select a start date";
    return errs;
  };

  const getStep8Errors = () => {
    const errs = {};
    const hasLanguage = Object.values(formData.preferredLanguages).some(
      (v) => v === true,
    );
    if (!hasLanguage && !formData.otherLanguage.trim())
      errs.preferredLanguages =
        "Please select at least one language or specify other";
    return errs;
  };

  const getStep9Errors = () => {
    const errs = {};
    if (!formData.emergencyName.trim() || formData.emergencyName.trim().length < 2)
      errs.emergencyName = "Please enter emergency contact's full name";
    if (!formData.emergencyRelation)
      errs.emergencyRelation = "Please select relationship";
    if (formData.emergencyRelation === "Other" && !formData.emergencyRelationOther.trim())
      errs.emergencyRelationOther = "Please specify relationship";
    if (!formData.emergencyMobile.trim())
      errs.emergencyMobile = "Emergency mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.emergencyMobile.trim()))
      errs.emergencyMobile = "Please enter a valid 10-digit Indian mobile number";
    if (formData.emergencyEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emergencyEmail.trim()))
      errs.emergencyEmail = "Please enter a valid email address";
    if (!formData.emergencyAddress.trim() || formData.emergencyAddress.trim().length < 5)
      errs.emergencyAddress = "Please enter emergency contact's address";
    return errs;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return Object.keys(getStep1Errors()).length === 0;
      case 2:
        return Object.keys(getStep2Errors()).length === 0;
      case 3:
        return Object.keys(getStep3Errors()).length === 0;
      case 4:
        return Object.keys(getStep4Errors()).length === 0;
      case 5:
        return Object.keys(getStep5Errors()).length === 0;
      case 6:
        return Object.keys(getStep6Errors()).length === 0;
      case 7:
        return Object.keys(getStep7Errors()).length === 0;
      case 8:
        return Object.keys(getStep8Errors()).length === 0;
      case 9:
        return Object.keys(getStep9Errors()).length === 0;
      default:
        return false;
    }
  };

  const validateAndProceed = () => {
    let stepErrors = {};
    switch (currentStep) {
      case 1:
        stepErrors = getStep1Errors();
        break;
      case 2:
        stepErrors = getStep2Errors();
        break;
      case 3:
        stepErrors = getStep3Errors();
        break;
      case 4:
        stepErrors = getStep4Errors();
        break;
      case 5:
        stepErrors = getStep5Errors();
        break;
      case 6:
        stepErrors = getStep6Errors();
        break;
      case 7:
        stepErrors = getStep7Errors();
        break;
      case 8:
        stepErrors = getStep8Errors();
        break;
      case 9:
        stepErrors = getStep9Errors();
        break;
    }
    setErrors(stepErrors);
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(stepErrors).forEach((key) => (allTouched[key] = true));
    setTouched((prev) => ({ ...prev, ...allTouched }));
    return Object.keys(stepErrors).length === 0;
  };

  const buildFormPayload = () => {
    const services = Object.entries(formData.services)
      .filter(([, v]) => v)
      .map(([k]) => k.replace(/([A-Z])/g, " $1").trim())
      .join(", ");
    const conditions = Object.entries(formData.patientCondition)
      .filter(([, v]) => v)
      .map(([k]) => k.replace(/([A-Z])/g, " $1").trim())
      .join(", ");
    const languages = Object.entries(formData.preferredLanguages)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(", ");
    return {
      _replyto: "no-reply@sahs.com",
      _subject: `Caregiver Application from ${formData.name} - ${formData.careGiverPlan || "General"}`,
      "Applicant Name": formData.name,
      "Mobile Number": formData.mobile,
      "Location": formData.location,
      "Google Map Link": formData.googleMapLink || "None",
      "Address": formData.address,
      "Pincode": formData.pincode,
      "Care Giver Plan": formData.careGiverPlan,
      "Patient Condition Category": formData.patientConditionCategory,
      "Patient Name": formData.patientName,
      "Patient Age": formData.age,
      "Patient Gender": formData.gender,
      "Patient Height (Feet)": formData.height,
      "Patient Weight (Kg)": formData.weight,
      "Patient Conditions": conditions || "None specified",
      "Has Medical Tubes/Devices": formData.hasTubes,
      "Shift Preference": formData.shiftPreference,
      "Services Required": services || "None specified",
      "Service Duration": formData.serviceDuration,
      "Start Preference": formData.startPreference,
      "Start Date": formData.startPreference === "Immediate" ? "Immediate" : formData.startDateCalendar,
      "Preferred Languages": languages || "None specified",
      "Other Language": formData.otherLanguage || "None",
      "Emergency Contact Name": formData.emergencyName,
      "Emergency Contact Relation": formData.emergencyRelation === "Other" ? formData.emergencyRelationOther : formData.emergencyRelation,
      "Emergency Contact Mobile": formData.emergencyMobile,
      "Emergency Contact Email": formData.emergencyEmail || "None",
      "Emergency Contact Address": formData.emergencyAddress,
      "Submission Date": new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      Source: "Akshai Healthcare Services Website",
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAndProceed()) return;
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(buildFormPayload()),
      });
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Application submitted successfully! Our care team will contact you within 2-4 hours.",
        });
        setFormData({
          name: "",
          mobile: "",
          location: "",
          googleMapLink: "",
          address: "",
          pincode: "",
          careGiverPlan: "",
          patientConditionCategory: "",
          patientName: "",
          age: "",
          gender: "",
          height: "",
          weight: "",
          patientCondition: {
            conscious: false,
            unconscious: false,
            independentWalking: false,
            walkWithSupport: false,
            oxygenSupport: false,
            bedSore: false,
          },
          hasTubes: "",
          shiftPreference: "",
          services: {
            diaperChange: false,
            spongingBathing: false,
            toiletAssistance: false,
            urineBagEmptying: false,
            catheterHygiene: false,
            feedingNutrition: false,
            oralFeeding: false,
            emotionalPhysicalSupport: false,
            companionship: false,
            lightExercise: false,
            dementiaCare: false,
            medicalAndHealthMonitoring: false,
            medicineReminder: false,
            bloodSugarMonitoring: false,
            insulinAdministration: false,
            digitalMonitoring: false,
            emergencyCare: false,
            drsAppointments: false,
            hospitalAssistance: false,
          },
          serviceDuration: "",
          startPreference: "",
          startDate: "",
          startDateCalendar: "",
          preferredLanguages: {
            tamil: false,
            english: false,
            telugu: false,
            malayalam: false,
            hindi: false,
          },
          otherLanguage: "",
          emergencyName: "",
          emergencyRelation: "",
          emergencyRelationOther: "",
          emergencyMobile: "",
          emergencyEmail: "",
          emergencyAddress: "",
        });
        setErrors({});
        setTouched({});
        setCurrentStep(1);
      } else throw new Error("Submission failed");
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Submission failed. Please try again or call us at +91 94436 08223.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateAndProceed())
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const serviceOptions = [
    { key: "diaperChange", label: "Diaper Change" },
    { key: "spongingBathing", label: "Sponging / Bathing" },
    { key: "toiletAssistance", label: "Toilet Assistance" },
    { key: "urineBagEmptying", label: "Urine Bag Emptying" },
    { key: "catheterHygiene", label: "Catheter Hygiene" },
    { key: "feedingNutrition", label: "Feeding & Nutrition" },
    { key: "oralFeeding", label: "Oral Feeding" },
    { key: "emotionalPhysicalSupport", label: "Emotional & Physical Support" },
    { key: "companionship", label: "Companionship" },
    { key: "lightExercise", label: "Light Exercise" },
    { key: "dementiaCare", label: "Dementia Care" },
    { key: "medicalAndHealthMonitoring", label: "Medical & Health Monitoring" },
    { key: "medicineReminder", label: "Medicine Reminder" },
    { key: "bloodSugarMonitoring", label: "Blood Sugar Monitoring" },
    { key: "insulinAdministration", label: "Insulin Administration" },
    { key: "digitalMonitoring", label: "Digital Monitoring" },
    { key: "emergencyCare", label: "Emergency Care" },
    { key: "drsAppointments", label: "Drs Appointments and Assistance" },
    { key: "hospitalAssistance", label: "Hospital Assistance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F5] to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a
              href="/"
              className="flex items-center gap-2.5 text-[#003399] font-bold"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center p-1 shadow-md flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Akshai Healthcare Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-bold leading-tight block">
                  Akshai Healthcare Services
                </span>
                <span className="text-[10px] text-gray-400 font-normal hidden sm:block">
                  Healthcare Services at Your Doorstep
                </span>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#990100] rounded-full animate-pulse" />
              <span className="text-gray-500 text-xs font-medium">
                Caregiver Application Form
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={brochure}
                download="Akshai Healthcare Service Brochure.png"
                className="hidden sm:inline-flex items-center gap-1.5 text-gray-400 hover:text-[#003399] text-xs font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Brochure
              </a>
              <a
                href="tel:+919443608223"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#990100] text-white text-[11px] font-bold rounded-lg hover:bg-[#7A0100] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Need Help?</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="inline-flex items-center gap-2 bg-[#003399]/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#003399]" />
            <span className="text-[#003399] font-semibold text-xs uppercase tracking-wider">
              Caregiver Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 tracking-tight">
            Application Form
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Fill out this form to apply for our professional caregiver services.
            We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-400">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-xs font-semibold text-[#003399]">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
                background: "linear-gradient(to right, #003399, #990100)",
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#003399] rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Personal Information
                    </h2>
                    <p className="text-xs text-gray-400">
                      Your contact & location details
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.name ? "border-[#DC2626] bg-[#FEF2F2]" : touched.name ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.name}
                      </p>
                    )}
                    {touched.name && !errors.name && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Looks good
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.mobile ? "border-[#DC2626] bg-[#FEF2F2]" : touched.mobile ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.mobile}
                      </p>
                    )}
                    {touched.mobile && !errors.mobile && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Valid number
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Location (City/State) *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="City, State"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.location ? "border-[#DC2626] bg-[#FEF2F2]" : touched.location ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.location}
                      </p>
                    )}
                    {touched.location && !errors.location && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Looks good
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="6-digit pincode"
                      maxLength={6}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.pincode ? "border-[#DC2626] bg-[#FEF2F2]" : touched.pincode ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.pincode && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.pincode}
                      </p>
                    )}
                    {touched.pincode && !errors.pincode && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Valid pincode
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Full Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="House/Flat No., Street, Area, Landmark"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.address ? "border-[#DC2626] bg-[#FEF2F2]" : touched.address ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.address && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.address}
                      </p>
                    )}
                    {touched.address && !errors.address && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Looks good
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-gray-600">
                        Google Map Location (Optional)
                      </label>
                      <button
                        type="button"
                        onClick={handleLocateMe}
                        disabled={isLocating}
                        className="text-[10px] text-[#003399] hover:text-[#002080] font-semibold flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLocating ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" /> Locating...
                          </>
                        ) : (
                          <>
                            <MapPin className="w-3 h-3" /> Locate Me
                          </>
                        )}
                      </button>
                    </div>
                    <input
                      type="text"
                      name="googleMapLink"
                      value={formData.googleMapLink}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Paste Google Maps link or coordinates"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.googleMapLink ? "border-[#DC2626] bg-[#FEF2F2]" : touched.googleMapLink ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.googleMapLink && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.googleMapLink}
                      </p>
                    )}
                    {touched.googleMapLink && !errors.googleMapLink && formData.googleMapLink && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Location link added
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Care Giver Plan *
                    </label>
                    <select
                      name="careGiverPlan"
                      value={formData.careGiverPlan}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all bg-white ${errors.careGiverPlan ? "border-[#DC2626] bg-[#FEF2F2]" : touched.careGiverPlan ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    >
                      <option value="">Select Plan</option>
                      <option value="6 Hours">6 Hours</option>
                      <option value="12 Hours">12 Hours</option>
                      <option value="24 Hours">24 Hours</option>
                      <option value="Periodical Visits">Periodical Visits</option>
                    </select>
                    {errors.careGiverPlan && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.careGiverPlan}
                      </p>
                    )}
                    {touched.careGiverPlan && !errors.careGiverPlan && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Selected
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Patient Condition Category *
                    </label>
                    <select
                      name="patientConditionCategory"
                      value={formData.patientConditionCategory}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all bg-white ${errors.patientConditionCategory ? "border-[#DC2626] bg-[#FEF2F2]" : touched.patientConditionCategory ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    >
                      <option value="">Select Category</option>
                      <option value="Elderly Care">Elderly Care</option>
                      <option value="Bed Ridden">Bed Ridden</option>
                      <option value="Dementia Care">Dementia Care</option>
                      <option value="Stroke Care">Stroke Care</option>
                      <option value="Parkinson">Parkinson</option>
                      <option value="Post Operative Care">
                        Post Operative Care
                      </option>
                      <option value="General Care">General Care</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.patientConditionCategory && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.patientConditionCategory}
                      </p>
                    )}
                    {touched.patientConditionCategory &&
                      !errors.patientConditionCategory && (
                        <p className="mt-1 text-[11px] text-[#16A34A]">
                          ✓ Selected
                        </p>
                      )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#990100] rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Patient Details
                    </h2>
                    <p className="text-xs text-gray-400">
                      Person requiring caregiving support
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Patient's full name"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.patientName ? "border-[#DC2626] bg-[#FEF2F2]" : touched.patientName ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.patientName && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.patientName}
                      </p>
                    )}
                    {touched.patientName && !errors.patientName && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Looks good
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Age (Years) *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Age"
                      min="1"
                      max="120"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.age ? "border-[#DC2626] bg-[#FEF2F2]" : touched.age ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.age && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.age}
                      </p>
                    )}
                    {touched.age && !errors.age && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Valid age
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all bg-white ${errors.gender ? "border-[#DC2626] bg-[#FEF2F2]" : touched.gender ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.gender}
                      </p>
                    )}
                    {touched.gender && !errors.gender && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Selected
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Height (Feet) *
                    </label>
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="e.g., 5.6"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.height ? "border-[#DC2626] bg-[#FEF2F2]" : touched.height ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.height && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.height}
                      </p>
                    )}
                    {touched.height && !errors.height && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Valid height
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Weight (Kg) *
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="e.g., 70"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.weight ? "border-[#DC2626] bg-[#FEF2F2]" : touched.weight ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.weight && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.weight}
                      </p>
                    )}
                    {touched.weight && !errors.weight && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Valid weight
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#003399] rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Patient Condition
                    </h2>
                    <p className="text-xs text-gray-400">
                      Current health status
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {[
                    "conscious",
                    "unconscious",
                    "independentWalking",
                    "walkWithSupport",
                    "oxygenSupport",
                    "bedSore",
                  ].map((cond) => (
                    <label
                      key={cond}
                      className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-[#003399]/30 transition-all"
                    >
                      <input
                        type="checkbox"
                        name={`patientCondition.${cond}`}
                        checked={formData.patientCondition[cond]}
                        onChange={handleCheckboxChange}
                        className="rounded accent-[#003399]"
                      />
                      <span className="text-sm">
                        {cond
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">
                    Medical Tubes or Devices? *
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasTubes"
                          value={opt}
                          checked={formData.hasTubes === opt}
                          onChange={handleRadioChange}
                          className="accent-[#003399]"
                        />{" "}
                        {opt}
                      </label>
                    ))}
                  </div>
                  {errors.hasTubes && (
                    <p className="mt-1 text-[11px] text-[#DC2626]">
                      {errors.hasTubes}
                    </p>
                  )}
                  {touched.hasTubes && !errors.hasTubes && (
                    <p className="mt-1 text-[11px] text-[#16A34A]">
                      ✓ Selected
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#990100] rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Caregiver Shift
                    </h2>
                    <p className="text-xs text-gray-400">
                      Choose your preferred care schedule
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      value: "Caregiver on Call / Emergency Care",
                      label: "Caregiver on Call / Emergency Care",
                      desc: "For quick visits or urgent assistance when needed",
                    },
                    {
                      value: "Caregiver for 24/7 care",
                      label: "Caregiver for 24/7 care",
                      desc: "Continuous round-the-clock professional caregiver support",
                    },
                    {
                      value: "Caregivers stay with you to provide care throughout the day and night",
                      label: "Caregiver Stay-in Service",
                      desc: "Dedicated live-in caregiver staying day and night at your home",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all ${formData.shiftPreference === opt.value ? "border-[#003399] bg-[#003399]/5" : "border-gray-200 hover:border-[#990100]/30"}`}
                    >
                      <input
                        type="radio"
                        name="shiftPreference"
                        value={opt.value}
                        checked={formData.shiftPreference === opt.value}
                        onChange={handleRadioChange}
                        className="accent-[#003399]"
                      />
                      <div>
                        <span className="font-semibold text-gray-900">
                          {opt.label}
                        </span>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {opt.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.shiftPreference && (
                  <p className="mt-2 text-[11px] text-[#DC2626]">
                    {errors.shiftPreference}
                  </p>
                )}
                {touched.shiftPreference && !errors.shiftPreference && (
                  <p className="mt-2 text-[11px] text-[#16A34A]">✓ Selected</p>
                )}
              </div>
            )}

            {/* Step 5 */}
            {currentStep === 5 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#003399] rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Services Required *
                    </h2>
                    <p className="text-xs text-gray-400">
                      Select at least one service
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map((svc) => (
                    <label
                      key={svc.key}
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-[#003399]/30 transition-all"
                    >
                      <input
                        type="checkbox"
                        name={`services.${svc.key}`}
                        checked={formData.services[svc.key]}
                        onChange={handleCheckboxChange}
                        className="rounded accent-[#003399]"
                      />
                      <span className="text-sm">{svc.label}</span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-[11px] text-[#DC2626]">
                    {errors.services}
                  </p>
                )}
              </div>
            )}

            {/* Step 6 */}
            {currentStep === 6 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#990100] rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Service Duration
                    </h2>
                    <p className="text-xs text-gray-400">
                      How long do you need the caregiver service for?
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">
                    Service Duration *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["30 Days", "45 Days", "60 Days", "90 Days", "6 Months", "1 Year"].map(
                      (dur) => (
                        <label
                          key={dur}
                          className={`flex items-center gap-2 px-4 py-2.5 border-2 rounded-xl cursor-pointer transition-all ${formData.serviceDuration === dur ? "border-[#003399] bg-[#003399]/5" : "border-gray-200 hover:border-[#990100]/30"}`}
                        >
                          <input
                            type="radio"
                            name="serviceDuration"
                            value={dur}
                            checked={formData.serviceDuration === dur}
                            onChange={handleRadioChange}
                            className="accent-[#003399]"
                          />{" "}
                          {dur}
                        </label>
                      ),
                    )}
                  </div>
                  {errors.serviceDuration && (
                    <p className="mt-1 text-[11px] text-[#DC2626]">
                      {errors.serviceDuration}
                    </p>
                  )}
                  {touched.serviceDuration && !errors.serviceDuration && (
                    <p className="mt-1 text-[11px] text-[#16A34A]">
                      ✓ Selected
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 7 */}
            {currentStep === 7 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#003399] rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Start Date
                    </h2>
                    <p className="text-xs text-gray-400">
                      When do you want to start the caregiver service?
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">
                      Start Preference *
                    </label>
                    <div className="flex gap-4 mb-4">
                      {["Immediate", "Select Date"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="startPreference"
                            value={opt}
                            checked={formData.startPreference === opt}
                            onChange={(e) => {
                              handleRadioChange(e);
                              if (opt === "Immediate") {
                                setFormData((prev) => ({
                                  ...prev,
                                  startDateCalendar: "",
                                }));
                              }
                            }}
                            className="accent-[#003399]"
                          />{" "}
                          {opt}
                        </label>
                      ))}
                    </div>
                    {errors.startPreference && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.startPreference}
                      </p>
                    )}
                    {touched.startPreference && !errors.startPreference && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">
                        ✓ Selected
                      </p>
                    )}
                  </div>

                  {formData.startPreference === "Select Date" && (
                    <div className="animate-fade-in">
                      <label className="block text-xs font-semibold text-gray-600 mb-2">
                        Choose Start Date *
                      </label>
                      <input
                        type="date"
                        name="startDateCalendar"
                        value={formData.startDateCalendar}
                        onChange={handleTextChange}
                        onBlur={handleBlur}
                        min={new Date().toISOString().split("T")[0]}
                        className={`px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all w-full sm:max-w-xs ${errors.startDateCalendar ? "border-[#DC2626] bg-[#FEF2F2]" : touched.startDateCalendar ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                      />
                      {errors.startDateCalendar && (
                        <p className="mt-1 text-[11px] text-[#DC2626]">
                          {errors.startDateCalendar}
                        </p>
                      )}
                      {touched.startDateCalendar && !errors.startDateCalendar && (
                        <p className="mt-1 text-[11px] text-[#16A34A]">
                          ✓ Date selected
                        </p>
                      )}
                      <p className="text-[10px] text-gray-400 mt-1">
                        Select your preferred start date (today or later)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 8 */}
            {currentStep === 8 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#990100] rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Preferred Language
                    </h2>
                    <p className="text-xs text-gray-400">
                      Select caregiver's language(s)
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["tamil", "english", "telugu", "malayalam", "hindi"].map(
                    (lang) => (
                      <label
                        key={lang}
                        className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl cursor-pointer hover:border-[#003399]/30 transition-all capitalize"
                      >
                        <input
                          type="checkbox"
                          name={`preferredLanguages.${lang}`}
                          checked={formData.preferredLanguages[lang]}
                          onChange={handleCheckboxChange}
                          className="rounded accent-[#003399]"
                        />{" "}
                        {lang}
                      </label>
                    ),
                  )}
                </div>
                {errors.preferredLanguages && (
                  <p className="mt-1 text-[11px] text-[#DC2626]">
                    {errors.preferredLanguages}
                  </p>
                )}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Other Language (if any)
                  </label>
                  <input
                    type="text"
                    name="otherLanguage"
                    value={formData.otherLanguage}
                    onChange={handleTextChange}
                    placeholder="Specify any other language"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-sm focus:border-[#003399] outline-none transition-all max-w-md"
                  />
                </div>
              </div>
            )}

            {/* Step 9 */}
            {currentStep === 9 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#003399] rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Emergency Contact Person
                    </h2>
                    <p className="text-xs text-gray-400">
                      Contact information for emergencies
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Emergency Contact Name *
                    </label>
                    <input
                      type="text"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Name of contact person"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.emergencyName ? "border-[#DC2626] bg-[#FEF2F2]" : touched.emergencyName ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.emergencyName && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.emergencyName}
                      </p>
                    )}
                    {touched.emergencyName && !errors.emergencyName && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">✓ Looks good</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Relationship *
                    </label>
                    <select
                      name="emergencyRelation"
                      value={formData.emergencyRelation}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all bg-white ${errors.emergencyRelation ? "border-[#DC2626] bg-[#FEF2F2]" : touched.emergencyRelation ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    >
                      <option value="">Select Relation</option>
                      <option value="Husband">Husband</option>
                      <option value="Wife">Wife</option>
                      <option value="Son">Son</option>
                      <option value="Daughter">Daughter</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.emergencyRelation && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.emergencyRelation}
                      </p>
                    )}
                    {touched.emergencyRelation && !errors.emergencyRelation && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">✓ Selected</p>
                    )}
                  </div>

                  {formData.emergencyRelation === "Other" && (
                    <div className="md:col-span-2 animate-fade-in">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Specify Relationship *
                      </label>
                      <input
                        type="text"
                        name="emergencyRelationOther"
                        value={formData.emergencyRelationOther}
                        onChange={handleTextChange}
                        onBlur={handleBlur}
                        placeholder="Please specify relationship"
                        className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.emergencyRelationOther ? "border-[#DC2626] bg-[#FEF2F2]" : touched.emergencyRelationOther ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                      />
                      {errors.emergencyRelationOther && (
                        <p className="mt-1 text-[11px] text-[#DC2626]">
                          {errors.emergencyRelationOther}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="emergencyMobile"
                      value={formData.emergencyMobile}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.emergencyMobile ? "border-[#DC2626] bg-[#FEF2F2]" : touched.emergencyMobile ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.emergencyMobile && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.emergencyMobile}
                      </p>
                    )}
                    {touched.emergencyMobile && !errors.emergencyMobile && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">✓ Valid number</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Email ID (Optional)
                    </label>
                    <input
                      type="email"
                      name="emergencyEmail"
                      value={formData.emergencyEmail}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.emergencyEmail ? "border-[#DC2626] bg-[#FEF2F2]" : touched.emergencyEmail ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.emergencyEmail && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.emergencyEmail}
                      </p>
                    )}
                    {touched.emergencyEmail && !errors.emergencyEmail && formData.emergencyEmail && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">✓ Valid email</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="emergencyAddress"
                      value={formData.emergencyAddress}
                      onChange={handleTextChange}
                      onBlur={handleBlur}
                      placeholder="Full Address of emergency contact"
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all ${errors.emergencyAddress ? "border-[#DC2626] bg-[#FEF2F2]" : touched.emergencyAddress ? "border-[#16A34A] bg-[#F0FDF4]" : "border-gray-200 focus:border-[#003399]"}`}
                    />
                    {errors.emergencyAddress && (
                      <p className="mt-1 text-[11px] text-[#DC2626]">
                        {errors.emergencyAddress}
                      </p>
                    )}
                    {touched.emergencyAddress && !errors.emergencyAddress && (
                      <p className="mt-1 text-[11px] text-[#16A34A]">✓ Looks good</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#003399] text-white font-semibold text-sm rounded-xl hover:bg-[#002080] transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !isStepValid()}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#990100] text-white font-bold text-sm rounded-xl hover:bg-[#7A0100] transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Application
                    </>
                  )}
                </button>
              )}
            </div>

            {submitStatus.type && (
              <div
                className={`mt-6 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-[#F0FDF4] border border-[#16A34A]/20 text-[#16A34A]" : "bg-[#FEF2F2] border border-[#DC2626]/20 text-[#DC2626]"}`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">
                      {submitStatus.type === "success"
                        ? "Submitted Successfully!"
                        : "Submission Failed"}
                    </p>
                    <p className="text-xs mt-0.5">{submitStatus.message}</p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-md border border-gray-100">
            <Shield className="w-4 h-4 text-[#003399]" />
            <span className="text-xs text-gray-500">
              Your information is secure and will never be shared
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
