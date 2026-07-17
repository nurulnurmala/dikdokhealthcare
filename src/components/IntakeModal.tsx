import React, { useState } from "react";
import { X, Send, ShieldCheck, CheckCircle, ArrowRight, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetResource: string; // Describes what the user clicked (e.g. Free Consultation, E-book Name)
}

export default function IntakeModal({ isOpen, onClose, targetResource }: IntakeModalProps) {
  const { language, t, getFormLink } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    role: "Owner",
    roleOthersCustom: "",
    clinicName: "",
    clinicAddress: "",
    socialMedia: "",
    whatsapp: "",
    picName: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validatedFields, setValidatedFields] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const handleRoleChange = (roleVal: string) => {
    setFormData((prev) => ({
      ...prev,
      role: roleVal,
      // Clear custom role if switching away from others
      roleOthersCustom: roleVal === "Others" ? prev.roleOthersCustom : "",
    }));
  };

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const errors: Record<string, boolean> = {};
    if (!formData.fullName.trim()) errors.fullName = true;
    if (formData.role === "Others" && !formData.roleOthersCustom.trim()) errors.roleOthersCustom = true;
    if (!formData.clinicName.trim()) errors.clinicName = true;
    if (!formData.clinicAddress.trim()) errors.clinicAddress = true;
    if (!formData.socialMedia.trim()) errors.socialMedia = true;
    if (!formData.whatsapp.trim()) errors.whatsapp = true;
    if (!formData.picName.trim()) errors.picName = true;

    if (Object.keys(errors).length > 0) {
      setValidatedFields(errors);
      return;
    }

    setValidatedFields({});
    setIsSubmitting(true);

    // Simulate standard secure enterprise lead intake processing 
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save submission data to localStorage for persistence
      const submissions = JSON.parse(localStorage.getItem("dikdok_leads") || "[]");
      submissions.push({
        ...formData,
        targetResource,
        timestamp: new Date().toISOString(),
        language,
      });
      localStorage.setItem("dikdok_leads", JSON.stringify(submissions));
    }, 1200);
  };

  // Compile Google Form Link with prefilled values
  const googleFormPrefilledLink = () => {
    const finalRole = formData.role === "Others" ? formData.roleOthersCustom : formData.role;
    // Map of fields to append. Pre-fill Google Form parameters dynamically
    const params = new URLSearchParams();
    params.append("entry.1000001", formData.fullName); // Full Name
    params.append("entry.1000002", finalRole); // Role
    params.append("entry.1000003", formData.clinicName); // Clinic Name
    params.append("entry.1000004", formData.clinicAddress); // Clinic Address
    params.append("entry.1000005", formData.socialMedia); // Social Media Link
    params.append("entry.1000006", formData.whatsapp); // WhatsApp
    params.append("entry.1000007", formData.picName); // PIC Name
    params.append("entry.1000008", targetResource); // Resource requested

    const enForm = "https://docs.google.com/forms/d/e/1FAIpQLSciqg3mWeK0kMId8EAd_eN_FormEn/viewform";
    const idForm = "https://docs.google.com/forms/d/e/1FAIpQLScyvIdpUa_FormId_Indonesian/viewform";
    const baseFormUrl = language === "en" ? enForm : idForm;

    return `${baseFormUrl}?${params.toString()}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark Overlay with background blur */}
      <div 
        className="fixed inset-0 bg-gray-950/70 backdrop-blur-sm transition-opacity" 
        onClick={isSubmitting ? undefined : onClose}
      />

      {/* Modal Card content wrapper */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-150 transform transition-all max-h-[90vh] flex flex-col z-10 animate-scale-in">
        
        {/* Header bar of Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-secondary" />
            <span className="text-[10px] font-black tracking-wider uppercase text-gray-400">
              {targetResource.startsWith("Claim") ? "Strategy Intake" : "Lead Resource Download"}
            </span>
          </div>
          {!isSubmitting && (
            <button 
              onClick={onClose}
              className="p-1 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scrollable Container Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Context Notice */}
              <div className="space-y-1.5 text-left pb-1 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-950 tracking-tight leading-none">
                  {t.modal.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  {t.modal.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-orange-50 px-2.5 py-1 rounded-full mt-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Request: <strong className="text-gray-900">{targetResource}</strong></span>
                </div>
              </div>

              {/* Form Input: Full Name */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  {t.modal.fullName} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.fullNamePH}
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                    validatedFields.fullName ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                  }`}
                />
              </div>

              {/* Form Input: Role/Position */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  {t.modal.role} <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-4 mb-3">
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="modal-role"
                      value="Owner"
                      checked={formData.role === "Owner"}
                      onChange={() => handleRoleChange("Owner")}
                      className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                    />
                    <span>{t.modal.roleOwner}</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="modal-role"
                      value="Manager"
                      checked={formData.role === "Manager"}
                      onChange={() => handleRoleChange("Manager")}
                      className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                    />
                    <span>{t.modal.roleManager}</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="modal-role"
                      value="Others"
                      checked={formData.role === "Others"}
                      onChange={() => handleRoleChange("Others")}
                      className="text-primary focus:ring-primary h-4 w-4 border-gray-300"
                    />
                    <span>{t.modal.roleOthers}</span>
                  </label>
                </div>

                {formData.role === "Others" && (
                  <input
                    type="text"
                    required
                    placeholder={t.modal.roleOthersPH}
                    value={formData.roleOthersCustom}
                    onChange={(e) => handleInputChange("roleOthersCustom", e.target.value)}
                    className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                      validatedFields.roleOthersCustom ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                    }`}
                  />
                )}
              </div>

              {/* Form Input: Clinic Name */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  {t.modal.clinicName} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.clinicNamePH}
                  value={formData.clinicName}
                  onChange={(e) => handleInputChange("clinicName", e.target.value)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                    validatedFields.clinicName ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                  }`}
                />
              </div>

              {/* Form Input: Clinic Address */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  {t.modal.clinicAddress} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.clinicAddressPH}
                  value={formData.clinicAddress}
                  onChange={(e) => handleInputChange("clinicAddress", e.target.value)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                    validatedFields.clinicAddress ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                  }`}
                />
              </div>

              {/* Form Input: Social Media */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  {t.modal.socialMedia} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.socialMediaPH}
                  value={formData.socialMedia}
                  onChange={(e) => handleInputChange("socialMedia", e.target.value)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                    validatedFields.socialMedia ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                  }`}
                />
              </div>

              {/* Form Input: WhatsApp Number */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  {t.modal.whatsapp} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.whatsappPH}
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                    validatedFields.whatsapp ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                  }`}
                />
              </div>

              {/* Form Input: PIC Name */}
              <div className="text-left">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  {t.modal.picName} <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.modal.picNamePH}
                  value={formData.picName}
                  onChange={(e) => handleInputChange("picName", e.target.value)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:bg-white transition-all ${
                    validatedFields.picName ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                  }`}
                />
              </div>

              {/* Security Compliance Seal */}
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-150 text-[10px] font-bold text-gray-400">
                <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>DIKDOK Privacy Seal: Patient and organization credentials are never leased, sold, or shared externally.</span>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center py-4 bg-gradient-to-r from-primary to-orange-600 outline-none hover:from-orange-600 hover:to-primary text-white text-sm font-extrabold rounded-2xl shadow-xl shadow-primary/20 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t.modal.submitting}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span>{t.modal.submit}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </button>

            </form>
          ) : (
            /* SUCCESS RESPONSE SCREEN */
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 animate-pulse">
                <CheckCircle className="w-8 h-8 stroke-[2]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">
                  {t.modal.successTitle}
                </h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed px-4">
                  {t.modal.successDesc}
                </p>
              </div>

              {/* Submissions Detail Grid */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-150 text-left space-y-2.5 max-w-sm mx-auto text-xs font-semibold text-gray-600">
                <div>
                  <span className="text-[9px] text-gray-400 block font-black uppercase">Clinician / Practice:</span>
                  <span className="text-gray-900">{formData.clinicName}</span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 block font-black uppercase">Position:</span>
                  <span className="text-gray-900">
                    {formData.role === "Others" ? formData.roleOthersCustom : formData.role}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 block font-black uppercase">Verifiable Contact:</span>
                  <span className="text-gray-900">{formData.whatsapp}</span>
                </div>
                <div>
                  <span className="text-[9px] text-gray-400 block font-black uppercase">Access Resource:</span>
                  <span className="text-primary font-bold">{targetResource}</span>
                </div>
              </div>

              {/* Action items inside success screen */}
              <div className="flex flex-col gap-3 max-w-sm mx-auto pt-4">
                <a
                  href={googleFormPrefilledLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center p-4 bg-gradient-to-r from-secondary to-[#5F1370] text-white text-xs font-bold rounded-2xl shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t.modal.orRedirect}
                </a>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-2xl transition-colors"
                >
                  {t.modal.close}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
