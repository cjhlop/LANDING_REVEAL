import React from 'react';
import { cn } from '@/lib/utils';
import {
  Code, Palette, ShieldCheck, Globe, Users, Lock, Rocket, Maximize, Mail, Server, Blocks, Accessibility,
  Type, LayoutGrid, Zap, Cloud, Settings, TrendingUp, MessageSquare, Bell, Star, Award, Briefcase,
  Calendar, Clock, Compass, Database, DollarSign, Edit, ExternalLink, FileText, Gift, Heart, Home,
  Image, Info, Key, Layers, Lightbulb, Link, List, MapPin, Monitor, Moon, Package, Paperclip, Percent,
  Phone, PieChart, Play, Plus, Printer, QrCode, RefreshCw, Search, Send, Share2, ShoppingCart, Smile,
  Speaker, Square, Sun, Tag, Target, Terminal, ThumbsUp, Trash2, Upload, User, Video, Volume2, Wallet,
  Wifi, X, ZoomIn, ZoomOut,
} from 'lucide-react';

const icons = [
  Code, Palette, ShieldCheck, Globe, Users, Lock, Rocket, Maximize, Mail, Server, Blocks, Accessibility,
  Type, LayoutGrid, Zap, Cloud, Settings, TrendingUp, MessageSquare, Bell, Star, Award, Briefcase,
  Calendar, Clock, Compass, Database, DollarSign, Edit, ExternalLink, FileText, Gift, Heart, Home,
  Image, Info, Key, Layers, Lightbulb, Link, List, MapPin, Monitor, Moon, Package, Paperclip, Percent,
  Phone, PieChart, Play, Plus, Printer, QrCode, RefreshCw, Search, Send, Share2, ShoppingCart, Smile,
  Speaker, Square, Sun, Tag, Target, Terminal, ThumbsUp, Trash2, Upload, User, Video, Volume2, Wallet,
  Wifi, X, ZoomIn, ZoomOut,
];

interface FeatureButtonProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
  icon?: React.ElementType;
}

export const FeatureButton: React.FC<FeatureButtonProps> = ({ text, isSelected = false, onClick, icon }) => {
  const IconComponent = icon || icons[Math.floor(Math.random() * icons.length)];

  return (
    <button
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-inter transition-colors duration-200",
        isSelected
          ? "bg-feature-blue text-white"
          : "bg-feature-bg-light text-feature-gray-text border border-feature-border hover:bg-feature-bg-selected"
      )}
      onClick={onClick}
      role="button"
      aria-pressed={isSelected}
    >
      <IconComponent className={cn("h-4 w-4", isSelected ? "text-white" : "text-feature-gray-text")} aria-hidden="true" />
      {text}
    </button>
  );
};