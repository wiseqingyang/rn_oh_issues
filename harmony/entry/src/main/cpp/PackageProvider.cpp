//
// Created on 2024/12/9.
//
// Node APIs are not fully supported. To solve the compilation error of the interface cannot be found,
// please include "napi/native_api.h".

#include "RNOH/PackageProvider.h"
#include "generated/RNOHGeneratedPackage.h"
#include "GestureHandlerPackage.h"
#include "SafeAreaViewPackage.h"
#include "LottieAnimationViewPackage.h"
#include "ViewPagerPackage.h"
#include "RNCVideoPackage.h"
#include "PdfViewPackage.h"
#include "ReanimatedPackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(Package::Context ctx) {
    return {
        std::make_shared<RNOHGeneratedPackage>(ctx),
        std::make_shared<GestureHandlerPackage>(ctx),
        std::make_shared<SafeAreaViewPackage>(ctx),
        std::make_shared<LottieAnimationViewPackage>(ctx),
        std::make_shared<ViewPagerPackage>(ctx),
        std::make_shared<RNCVideoPackage>(ctx),
        std::make_shared<PdfViewPackage>(ctx),
        std::make_shared<ReanimatedPackage>(ctx)
    };
}